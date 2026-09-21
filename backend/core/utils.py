from django_bolt.responses import Response
from compression import zstd
import msgspec

serializer_encode = msgspec.json.Encoder()

def encode_compress(data: list[object], level: int = 5) -> bytes:
    return zstd.compress(serializer_encode.encode(data), level)

def generate_zstd_response(data: bytes, status: int = 200) -> Response:
    return Response(data, status_code=status, headers={"Content-Encoding": 'zstd'})
