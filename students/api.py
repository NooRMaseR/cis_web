from django_bolt import BoltAPI
from django_bolt.exceptions import NotFound, BadRequest

from . import models
from collections import defaultdict
from .schemas import StudentDataRequest
from .serializers import CollageEmailSerializer, SessionInfo, StudentSubjectSerializer

app = BoltAPI(trailing_slash="append")

@app.post("/collage-email/")
async def get_collage_email(payload: StudentDataRequest) -> CollageEmailSerializer:
    try:
        student = await models.Student.objects.only("id", "collage_email", "password", "student_code").aget(national_id=payload.national_id)
    except models.Student.DoesNotExist:
        raise NotFound(detail="الرقم القومى غير صحيح")
    
    if student.student_code.lower() != payload.code.lower():
        raise NotFound(detail="كود الطالب غير صحيح")
    
    if student.collage_email == None or student.password == None:
        raise NotFound(detail="لا يوجد حساب جامعى، يرجى التوجه لشئون الطلبه")
    
    return CollageEmailSerializer(email=student.collage_email, password=student.password) # type: ignore

@app.post("/sessions/")
async def get_sessions(payload: StudentDataRequest) -> list[StudentSubjectSerializer]:
    
    try:
        student = await models.Student.objects.aget(
            national_id=payload.national_id
        )
    except models.Student.DoesNotExist:
        raise NotFound(detail="الرقم القومى غير صحيح")
    
    if student.student_code.lower() != payload.code.lower():
        raise NotFound(detail="كود الطالب غير صحيح")
    
    # 2. Fetch the student's enrollments directly from the junction table
    enrollments_qs = models.StudentSubject.objects.select_related('subject', 'doctor').filter(
        student=student
    ).order_by('time_start')
    
    # 3. Group the rows by Subject
    subject_map = defaultdict[tuple[str,str], list[SessionInfo]](list)
    
    async for enrollment in enrollments_qs:
        session = SessionInfo(
            session_type=enrollment.session_type,
            day=enrollment.day, 
            time_start=enrollment.time_start.strftime("%I:%M %p"),
            time_end=enrollment.time_end.strftime("%I:%M %p"),
            location=enrollment.location,
            doctor_name=enrollment.doctor.name if enrollment.doctor else None
        )
        
        subject_map[(enrollment.subject.name, enrollment.subject.code)].append(session)
    
    # 4. Map the grouped dictionary into our final nested Struct
    results = [
        StudentSubjectSerializer(
            subject_name=name,
            subject_code=code,
            sessions=sessions
        )
        for (name, code), sessions in subject_map.items()
    ]
    
    # 5. Handle the case where the student has no schedule entered yet
    if not results:
        raise BadRequest(detail="لم يتم تسجيل الطالب في أي مواد دراسية حتى الآن.")
        
    return results