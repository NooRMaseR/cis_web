from .serializers import NewsSerializer, SliderSerializer
from django_bolt.exceptions import NotFound
from django.core.cache import cache
from django_bolt import BoltAPI

from .utils import encode_compress, generate_zstd_response
from . import models

app = BoltAPI(trailing_slash="append")

@app.get("/slides/", response_model=list[SliderSerializer])
async def get_sliders():
    if cached_data:= await cache.aget("sliders"):
        return generate_zstd_response(cached_data)
    
    slides_qs = models.Slider.objects.all()
    compressed_data = encode_compress([SliderSerializer.from_model(slide) async for slide in slides_qs])
    
    await cache.aset("sliders", compressed_data, 3600)
    return generate_zstd_response(compressed_data)

@app.get("/news/", response_model=list[NewsSerializer])
async def get_news(limit: int = 0):
    CACHE_KEY = "news"
    if cached_data:= await cache.aget(CACHE_KEY):
        return generate_zstd_response(cached_data)
    
    news = models.News.objects.all()
    if limit > 0:
        news = news[:limit]
        
    compressed_data = encode_compress([NewsSerializer.from_model(news) async for news in news])
    await cache.aset(CACHE_KEY, compressed_data, 3600)
    return generate_zstd_response(compressed_data)

@app.get("/news/{id}/")
async def get_news_details(id: int) -> NewsSerializer:
    CACHE_KEY = f"news:{id}"
    if cached_data:= await cache.aget(CACHE_KEY):
        return cached_data
    
    try:
        news = await models.News.objects.aget(id=id)
    except models.News.DoesNotExist:
        raise NotFound(detail=f"No News Found with id {id}")
        
    data = NewsSerializer.from_model(news)
    await cache.aset(CACHE_KEY, data, 3600)
    return data
