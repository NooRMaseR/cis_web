from django_bolt.serializers import NonEmptyStr, Char255, Serializer
from datetime import datetime

class SliderSerializer(Serializer):
    description: NonEmptyStr
    image: NonEmptyStr

class NewsSerializer(Serializer):
    id: int
    title: Char255
    description: NonEmptyStr
    full_description: NonEmptyStr
    image: NonEmptyStr
    created_at: datetime

