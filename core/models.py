from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill
from django.core.cache import cache
from django.db import models
import nh3

# Create your models here.

class Slider(models.Model):
    image = ProcessedImageField(
        processors=[ResizeToFill(800, 450)],
        upload_to='sliders/',
        format="WEBP",
        options={"quality": 85}
    )
    description = models.TextField()

    def __str__(self) -> str:
        return f"slider: {self.pk}"

class News(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    full_description = models.TextField()
    image = ProcessedImageField(
        processors=[ResizeToFill(800, 450)],
        upload_to='news/',
        format="WEBP",
    )
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = "News"
        
    def save(self, *args, **kwargs):
        self.description = nh3.clean(self.description)
        self.full_description = nh3.clean(self.full_description)
        cache.delete_many(
            [
                f"news:{self.pk}",
                "news",
            ]
        )

        return super().save( *args, **kwargs)

    def __str__(self) -> str:
        return self.title