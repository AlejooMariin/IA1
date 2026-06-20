from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import DateTime
from sqlalchemy import ForeignKey

from datetime import datetime

from app.database import Base


class Bitacora(Base):

    __tablename__ = "bitacora"

    id = Column(
        Integer,
        primary_key=True
    )

    accion = Column(
        String(100)
    )

    descripcion = Column(
        String(500)
    )

    fecha = Column(
        DateTime,
        default=datetime.utcnow
    )

    factura_id = Column(
        Integer,
        ForeignKey("facturas.id"),
        nullable=True
    )

    usuario_id = Column(
        Integer,
        ForeignKey("usuarios.id"),
        nullable=True
    )