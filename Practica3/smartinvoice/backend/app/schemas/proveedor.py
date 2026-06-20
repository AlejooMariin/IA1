from pydantic import BaseModel

class ProveedorBase(BaseModel):
    nombre: str
    nit: str
    direccion: str


class ProveedorCreate(ProveedorBase):
    pass


class ProveedorUpdate(ProveedorBase):
    pass


class ProveedorResponse(ProveedorBase):
    id: int

    class Config:
        from_attributes = True