from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Float
from sqlalchemy import Date
from sqlalchemy import ForeignKey

from app.database import Base


class Factura(Base):

    __tablename__ = "facturas"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
        autoincrement=True
    )

    numero_factura = Column(
        String(100),
        nullable=False
    )

    fecha = Column(Date)

    nit = Column(String(50))

    subtotal = Column(Float)

    impuestos = Column(Float)

    total = Column(Float)

    estado = Column(
        String(50),
        default="Pendiente"
    )

    archivo = Column(String(255))

    proveedor_id = Column(
        Integer,
        ForeignKey("proveedores.id")
    )

    usuario_id = Column(
        Integer,
        ForeignKey("usuarios.id")
    )