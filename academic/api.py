from .serializers import StaffSerializer
from django.core.cache import cache
from django_bolt import BoltAPI
from . import models

app = BoltAPI(trailing_slash="append")

@app.get("/staff")
async def get_staff() -> list[StaffSerializer]:
    if cached_data:= await cache.aget("staff"):
        return cached_data
   
    staff_qs = models.StaffMember.objects.select_related("department").filter(educator=False)
    data = [StaffSerializer.from_model(staff) async for staff in staff_qs]
    await cache.aset("staff", data, 3600)
    return data

