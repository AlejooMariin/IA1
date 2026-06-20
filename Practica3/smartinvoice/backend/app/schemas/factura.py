from pydantic import BaseModel
from datetime import date
from typing import Optional


# =========================
# BASE
# =========================
class FacturaBase(BaseModel):
    numero_factura: str
    fecha: Optional[date] = None
    nit: str
    subtotal: float
    impuestos: float
    total: float
    estado: str = "Pendiente"
    archivo: Optional[str] = None

    proveedor_id: int
    usuario_id: int


# =========================
# CREATE
# =========================
class FacturaCreate(FacturaBase):
    pass


# =========================
# UPDATE
# =========================
class FacturaUpdate(BaseModel):
    numero_factura: Optional[str] = None
    fecha: Optional[date] = None
    nit: Optional[str] = None
    subtotal: Optional[float] = None
    impuestos: Optional[float] = None
    total: Optional[float] = None
    estado: Optional[str] = None
    archivo: Optional[str] = None
    proveedor_id: Optional[int] = None


# =========================
# RESPONSE SIMPLE (BD)
# =========================
class FacturaResponse(BaseModel):
    id: int
    numero_factura: str
    fecha: Optional[date]
    nit: str
    subtotal: float
    impuestos: float
    total: float
    estado: str
    archivo: Optional[str]

    proveedor_id: int
    usuario_id: int

    class Config:
        from_attributes = True


# =========================
# RESPONSE CON PROVEEDOR (FRONTEND)
# =========================
class FacturaConProveedorResponse(BaseModel):
    id: int
    numero_factura: str
    fecha: Optional[date]
    nit: str
    subtotal: float
    impuestos: float
    total: float
    estado: str
    archivo: Optional[str]

    proveedor_id: int
    proveedor_nombre: str  

    usuario_id: int

    class Config:
        from_attributes = True