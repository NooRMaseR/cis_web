from . import models
from django.contrib import admin
from unfold.admin import ModelAdmin
# Register your models here.

@admin.register(models.Department)
class DepartmentModel(ModelAdmin):
    list_display = ("name", )
    search_fields = ("name", )

@admin.register(models.StaffMember)
class StaffMemberModel(ModelAdmin):
    list_display = ("name", "department", "role", "image")
    list_display_links = ("name", )

@admin.register(models.Subject)
class SubjectModel(ModelAdmin):
    list_display = ("code", "name", "department")
    list_display_links = ("name", "code")

