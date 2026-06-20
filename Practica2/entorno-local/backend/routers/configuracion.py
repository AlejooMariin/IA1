from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from database import get_db
from models import Configuracion
from schemas import ConfiguracionRequest




router = APIRouter(
    prefix="/configuracion",
    tags=["Configuracion"]
)

@router.get("/")
def obtener_configuracion(
    db: Session = Depends(get_db)
):

    configuracion = (
        db.query(Configuracion)
        .first()
    )

    return configuracion

@router.put("/")
def actualizar_configuracion(
    request: ConfiguracionRequest,
    db: Session = Depends(get_db)
):

    configuracion = (
        db.query(Configuracion)
        .first()
    )

    if not configuracion:

        configuracion = Configuracion(
            telegram_chat_id=request.telegram_chat_id
        )

        db.add(configuracion)

    else:

        configuracion.telegram_chat_id = (
            request.telegram_chat_id
        )

    db.commit()

    return configuracion


