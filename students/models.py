import secrets
from django.db import models
from academic.models import StaffMember, Subject, Department

class SessionType(models.TextChoices):
    LECTURE = 'محاضرة'
    SECTION = 'سيكشن'

class SessionDays(models.TextChoices):
    SATURDAY = "السبت"
    SUNDAY = "الاحد"
    MONDAY = "الاثنين"
    TUESDAY = "الثلاثاء"
    WEDNESDAY = "الاربعاء"
    THURSDAY = "الخميس"

class Student(models.Model):
    name = models.CharField(max_length=255)
    student_code = models.CharField(max_length=20, unique=True)
    national_id = models.CharField(max_length=14, unique=True)
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True, blank=True)
    email = models.EmailField(unique=True)
    collage_email = models.EmailField(unique=True, blank=True, null=True)
    password = models.CharField(max_length=128, blank=True, null=True)
    subjects = models.ManyToManyField(Subject, through='StudentSubject', related_name='students')
    is_active = models.BooleanField(default=True)
    
    def save(self, *args, **kwargs) -> None:
        if not self.collage_email:
            self.collage_email = f"{self.student_code}@cis.edu.eg"
            
        if not self.password:
            self.password = "".join([secrets.choice('abcdefghijklmnopqrstuvwxyz1234567890') for _ in range(8)])
        return super().save(*args, **kwargs)

    def __str__(self) -> str:
        return f"{self.name} ({self.student_code})"

class StudentSubject(models.Model):
    student = models.ForeignKey(Student, models.CASCADE)
    subject = models.ForeignKey(Subject, models.CASCADE)
    group_num = models.PositiveSmallIntegerField(help_text="رقم المجموعه", null=True, blank=True)
    session_type = models.CharField(max_length=7, choices=SessionType)
    day = models.CharField(max_length=20, choices=SessionDays)
    time_start = models.TimeField()
    time_end = models.TimeField()
    location = models.CharField(max_length=100)
    doctor = models.ForeignKey(StaffMember, on_delete=models.SET_NULL, null=True, related_name='schedules')

    def __str__(self) -> str:
        return f"{self.student} - {self.subject} ({self.day})"
