from unfold.admin import ModelAdmin
from django.contrib import admin
from . import models

# Register your models here.

@admin.register(models.Student)
class StudentModel(ModelAdmin):
    list_display = ("national_id", "name", "student_code", "email", "is_active")
    list_display_links = ("national_id", "name", "student_code")

@admin.register(models.StudentSubject)
class ScheduleModel(ModelAdmin):
    list_display = ("subject", "group_num", "doctor", "session_type","time_start", "time_end", "location")
    list_display_links = ("subject", "group_num")
