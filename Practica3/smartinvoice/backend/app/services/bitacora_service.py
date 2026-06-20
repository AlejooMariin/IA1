from sqlalchemy.orm import Session

from app.models.bitacora import Bitacora

def get_all(db: Session):

    return (
        db.query(Bitacora)
        .order_by(Bitacora.id.desc())
        .all()
    )
    
def registrar(
    db: Session,
    accion: str,
    descripcion: str,
    factura_id: int = None,
    usuario_id: int = None
):

    registro = Bitacora(
        accion=accion,
        descripcion=descripcion,
        factura_id=factura_id,
        usuario_id=usuario_id
    )

    db.add(registro)

    db.commit()

    db.refresh(registro)

    return registro