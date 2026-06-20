from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from app.database import Base

class Usuario(Base):

    __tablename__ = "usuarios"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
        autoincrement=True
    )

    nombre = Column(String(100))

    email = Column(
        String(100),
        unique=True
    )

    password = Column(String(255))