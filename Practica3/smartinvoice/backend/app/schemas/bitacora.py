from datetime import datetime

from pydantic import BaseModel


class BitacoraResponse(BaseModel):

    id: int

    fecha: datetime

    accion: str

    descripcion: str | None

    factura_id: int | None

    usuario_id: int | None

    class Config:
        from_attributes = True