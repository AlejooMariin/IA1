from pydantic import BaseModel

class Diagnostico(BaseModel):
    falla: str
    mensaje: str