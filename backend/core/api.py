from .serializers import NewsSerializer, SliderSerializer
from django.core.cache import cache
from django_bolt import BoltAPI
from . import models

app = BoltAPI(trailing_slash="append")

@app.get("/slides/")
async def get_sliders() -> list[SliderSerializer]:
    if cached_data:= await cache.aget("sliders"):
        return cached_data
    
    slides_qs = models.Slider.objects.all()
    data = [SliderSerializer.from_model(slide) async for slide in slides_qs]
    
    await cache.aset("sliders", data, 3600)
    return data

@app.get("/news/")
async def get_news(limit: int = 0) -> list[NewsSerializer]:
    if cached_data:= await cache.aget("news"):
        return cached_data
    
    news = models.News.objects.all()
    if limit > 0:
        news = news[:limit]
        
    data = [NewsSerializer.from_model(news) async for news in news]
    await cache.aset("news", data, 3600)
    return data

@app.get("/news/{id}/")
async def get_news_details(id: int,) -> NewsSerializer:
    CACHE_KEY = f"news:{id}"
    if cached_data:= await cache.aget(CACHE_KEY):
        return cached_data
    
    news = await models.News.objects.aget(id=id)
        
    data = NewsSerializer.from_model(news)
    await cache.aset(CACHE_KEY, data, 3600)
    return data

