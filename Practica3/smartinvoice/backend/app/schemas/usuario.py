from pydantic import BaseModel, EmailStr

class UsuarioCreate(BaseModel):
    nombre: str
    email: EmailStr
    password: str


class UsuarioLogin(BaseModel):
    email: EmailStr
    password: str


class UsuarioResponse(BaseModel):
    id: int
    nombre: str
    email: str

    class Config:
        from_attributes = True