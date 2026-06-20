from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from database import get_db
from models import Usuario
from schemas import LoginRequest

router = APIRouter(
    prefix="/auth",
    tags=["Auth"]
)


@router.post("/login")
def login(
    request: LoginRequest,
    db: Session = Depends(get_db)
):

    usuario = (
        db.query(Usuario)
        .filter(
            Usuario.username == request.username,
            Usuario.password == request.password
        )
        .first()
    )

    if not usuario:
        raise HTTPException(
            status_code=401,
            detail="Credenciales incorrectas"
        )

    return {
        "success": True,
        "message": "Login correcto"
    }