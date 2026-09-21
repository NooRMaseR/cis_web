from django_bolt.serializers import Serializer
import msgspec

class CollageEmailSerializer(Serializer, gc=False):
    email: str
    password: str

class SessionInfo(msgspec.Struct, gc=False):
    session_type: str
    day: str 
    time_start: str
    time_end: str
    location: str
    doctor_name: str | None

class StudentSubjectSerializer(msgspec.Struct, gc=False):
    subject_name: str
    subject_code: str
    sessions: list[SessionInfo]