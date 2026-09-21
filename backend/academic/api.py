from core.utils import encode_compress, generate_zstd_response
from .serializers import StaffSerializer
from django.core.cache import cache
from django_bolt import BoltAPI
from . import models

app = BoltAPI(trailing_slash="append")

@app.get("/staff/", response_model=list[StaffSerializer])
async def get_staff():
    if cached_data:= await cache.aget("staff"):
        return generate_zstd_response(cached_data)
   
    staff_qs = models.StaffMember.objects.select_related("department").filter(educator=False)
    compressed_data = encode_compress([StaffSerializer.from_model(staff) async for staff in staff_qs])
    await cache.aset("staff", compressed_data, 3600)
    return generate_zstd_response(compressed_data)

