from django_bolt.serializers import Serializer

class DepartmentSerializer(Serializer, gc=False):
    id: int
    name: str

class StaffSerializer(Serializer, gc=False):
    id: int
    name: str
    department: DepartmentSerializer
    role: str
    image: str

