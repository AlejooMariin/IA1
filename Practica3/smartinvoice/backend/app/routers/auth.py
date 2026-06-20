from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.utils.dependencies import get_db

from app.schemas.usuario import (
    UsuarioCreate,
    UsuarioLogin,
    UsuarioResponse
)

from app.schemas.token import Token

from app.services import auth_service

from app.utils.security import (
    create_access_token
)

router = APIRouter(
    prefix="/auth",
    tags=["Auth"]
)


@router.post(
    "/register",
    response_model=UsuarioResponse
)
def register(
    data: UsuarioCreate,
    db: Session = Depends(get_db)
):

    user = auth_service.register(
        db,
        data
    )

    if not user:
        raise HTTPException(
            status_code=400,
            detail="Email ya registrado"
        )

    return user


@router.post(
    "/login",
    response_model=Token
)
def login(
    data: UsuarioLogin,
    db: Session = Depends(get_db)
):

    user = auth_service.authenticate(
        db,
        data.email,
        data.password
    )

    if not user:
        raise HTTPException(
            status_code=401,
            detail="Credenciales inválidas"
        )

    token = create_access_token(
        {
            "sub": user.email
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }