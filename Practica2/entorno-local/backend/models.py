from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text
from sqlalchemy import ForeignKey
from sqlalchemy import DateTime

from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()


class Usuario(Base):

    __tablename__ = "usuario"

    id = Column(Integer, primary_key=True)
    username = Column(String(100))
    password = Column(String(255))


class Categoria(Base):

    __tablename__ = "categoria"

    id = Column(Integer, primary_key=True)
    nombre = Column(String(100))
    descripcion = Column(String(255))

    preguntas = relationship(
        "Pregunta",
        back_populates="categoria"
    )


class Pregunta(Base):

    __tablename__ = "pregunta"

    id = Column(Integer, primary_key=True)

    pregunta = Column(String(500))

    respuesta = Column(Text)

    categoria_id = Column(
        Integer,
        ForeignKey("categoria.id")
    )

    categoria = relationship(
        "Categoria",
        back_populates="preguntas"
    )


class Configuracion(Base):

    __tablename__ = "configuracion"

    id = Column(Integer, primary_key=True)

    telegram_chat_id = Column(String(100))


class Consulta(Base):

    __tablename__ = "consulta"

    id = Column(Integer, primary_key=True)

    usuario_telegram = Column(String(100))

    consulta = Column(Text)

    respuesta = Column(Text)

    fecha = Column(DateTime)