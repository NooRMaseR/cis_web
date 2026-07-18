from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill
from django.db import models

# Create your models here.

class Department(models.Model):
    name = models.CharField(max_length=100, unique=True)
    
    def __str__(self) -> str:
        return self.name

class StaffMember(models.Model):
    name = models.CharField(max_length=255)
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True, blank=True, related_name='staff')
    role = models.CharField(max_length=50)
    image = ProcessedImageField(
        upload_to='staff/',
        processors=[ResizeToFill(400, 400)], # type: ignore
        format='WEBP', # type: ignore
        null=True, 
        blank=True
    )
    educator = models.BooleanField(default=False, help_text="Indicates wither to hide from collage management or not")
    
    def __str__(self) -> str:
        return self.name


class Subject(models.Model):
    code = models.CharField(max_length=20, unique=True)
    name = models.CharField(max_length=255)
    department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='subjects')

    def __str__(self) -> str:
        return f"{self.name} ({self.code})"
