from sqlalchemy.orm import Session

from app.models.proveedor import Proveedor


def get_all(db: Session):

    return db.query(
        Proveedor
    ).all()


def get_by_id(
    db: Session,
    proveedor_id: int
):

    return (
        db.query(Proveedor)
        .filter(
            Proveedor.id == proveedor_id
        )
        .first()
    )


def create(
    db: Session,
    data
):

    proveedor = Proveedor(
        nombre=data.nombre,
        nit=data.nit,
        direccion=data.direccion
    )

    db.add(proveedor)

    db.commit()

    db.refresh(proveedor)

    return proveedor


def update(
    db: Session,
    proveedor_id: int,
    data
):

    proveedor = get_by_id(
        db,
        proveedor_id
    )

    if not proveedor:
        return None

    proveedor.nombre = data.nombre
    proveedor.nit = data.nit
    proveedor.direccion = data.direccion

    db.commit()

    db.refresh(proveedor)

    return proveedor


def delete(
    db: Session,
    proveedor_id: int
):

    proveedor = get_by_id(
        db,
        proveedor_id
    )

    if not proveedor:
        return False

    db.delete(proveedor)

    db.commit()

    return True