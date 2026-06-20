from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.utils.dependencies import get_db
from app.models.factura import Factura
from app.models.proveedor import Proveedor
from app.models.usuario import Usuario

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)

@router.get("/")
def dashboard(db: Session = Depends(get_db)):

    return {
        "total_facturas": db.query(Factura).count(),
        "procesadas": db.query(Factura).filter(Factura.estado == "Procesado").count(),
        "pendientes": db.query(Factura).filter(Factura.estado == "Pendiente").count(),
        "proveedores": db.query(Proveedor).count(),
        "usuarios": db.query(Usuario).count(),
    }