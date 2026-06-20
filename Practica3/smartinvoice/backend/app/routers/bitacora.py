from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.utils.dependencies import get_db
from app.utils.auth import get_current_user

from app.models.usuario import Usuario

from app.services import bitacora_service

from app.schemas.bitacora import (
    BitacoraResponse
)

router = APIRouter(
    prefix="/bitacoras",
    tags=["Bitacoras"]
)


@router.get(
    "/",
    response_model=list[BitacoraResponse]
)
def listar(
    db: Session = Depends(get_db),
    current_user: Usuario = Depends(get_current_user)
):

    return bitacora_service.get_all(db)