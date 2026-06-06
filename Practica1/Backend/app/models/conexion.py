from pydantic import BaseModel

class Conexion(BaseModel):
    origen: str
    destino: str
    distancia: int