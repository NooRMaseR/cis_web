from typing import Annotated
import msgspec

class StudentDataRequest(msgspec.Struct):
    code: str
    national_id: Annotated[str, msgspec.Meta(min_length=14, max_length=14, pattern="^[0-9]+$")]
