from django_bolt.serializers import Serializer

class DepartmentSerializer(Serializer):
    id: int
    name: str

class StaffSerializer(Serializer):
    id: int
    name: str
    department: DepartmentSerializer
    role: str
    image: str

