from django_bolt.serializers import NonEmptyStr, Char255, Serializer
from datetime import datetime

class SliderSerializer(Serializer, gc=False):
    description: NonEmptyStr
    image: NonEmptyStr

class NewsSerializer(Serializer, gc=False):
    id: int
    title: Char255
    description: NonEmptyStr
    full_description: NonEmptyStr
    image: NonEmptyStr
    created_at: datetime

