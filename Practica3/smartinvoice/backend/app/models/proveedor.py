from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from app.database import Base

class Proveedor(Base):

    __tablename__ = "proveedores"

    id = Column(
    Integer,
    primary_key=True,
    index=True,
    autoincrement=True
)

    nombre = Column(String(200))
    nit = Column(String(50))
    direccion = Column(String(255))