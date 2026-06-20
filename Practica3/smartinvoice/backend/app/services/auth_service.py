from sqlalchemy.orm import Session

from app.models.usuario import Usuario

from app.utils.security import (
    hash_password,
    verify_password
)

def get_user_by_email(
    db: Session,
    email: str
):

    return (
        db.query(Usuario)
        .filter(
            Usuario.email == email
        )
        .first()
    )


def register(
    db: Session,
    data
):

    existing_user = get_user_by_email(
        db,
        data.email
    )

    if existing_user:
        return None

    user = Usuario(
        nombre=data.nombre,
        email=data.email,
        password=hash_password(
            data.password
        )
    )

    db.add(user)

    db.commit()

    db.refresh(user)

    return user


def authenticate(
    db: Session,
    email: str,
    password: str
):

    user = get_user_by_email(
        db,
        email
    )

    if not user:
        return None

    if not verify_password(
        password,
        user.password
    ):
        return None

    return user