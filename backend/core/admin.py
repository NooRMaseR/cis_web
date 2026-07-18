from unfold.contrib.forms.widgets import WysiwygWidget
from unfold.admin import ModelAdmin
from django.contrib import admin
from . import models

# Register your models here.

@admin.register(models.Slider)
class SliderModel(ModelAdmin):
    list_display = ('id', "image", "description")
    list_display_links = ('id', "image", "description")

@admin.register(models.News)
class NewsModel(ModelAdmin):
    list_display = ("id", "title", "image", "description", "created_at")
    list_display_links = ("id", "title")
    search_fields = ("title",)
    formfield_overrides = {
        models.models.TextField: {
            "widget": WysiwygWidget,
        }
    }
    


    
