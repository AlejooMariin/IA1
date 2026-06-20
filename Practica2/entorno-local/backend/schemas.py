from pydantic import BaseModel

class CategoriaBase(BaseModel):
    nombre: str
    descripcion: str


class CategoriaCreate(CategoriaBase):
    pass


class CategoriaUpdate(CategoriaBase):
    pass


class CategoriaResponse(CategoriaBase):
    id: int

    class Config:
        from_attributes = True


class PreguntaBase(BaseModel):
    pregunta: str
    respuesta: str
    categoria_id: int


class PreguntaCreate(PreguntaBase):
    pass


class PreguntaUpdate(PreguntaBase):
    pass


class PreguntaResponse(PreguntaBase):
    id: int

    class Config:
        from_attributes = True


class LoginRequest(BaseModel):
    username: str
    password: str

class ConfiguracionRequest(BaseModel):
    telegram_chat_id: str

class ConsultaCreate(BaseModel):
    usuario_telegram: str
    consulta: str
    respuesta: str

class ChatRequest(BaseModel):
    mensaje: str