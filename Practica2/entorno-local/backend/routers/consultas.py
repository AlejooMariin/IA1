from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from database import get_db

from models import Consulta

from schemas import ConsultaCreate

from datetime import datetime

router = APIRouter(
    prefix="/consultas",
    tags=["Consultas"]
)


@router.post("/")
def crear_consulta(
    request: ConsultaCreate,
    db: Session = Depends(get_db)
):

    consulta = Consulta(
        usuario_telegram=request.usuario_telegram,
        consulta=request.consulta,
        respuesta=request.respuesta,
        fecha=datetime.now()
    )

    db.add(consulta)

    db.commit()

    db.refresh(consulta)

    return consulta



@router.get("/")
def listar_consultas(
    db: Session = Depends(get_db)
):

    return (
        db.query(Consulta)
        .order_by(
            Consulta.fecha.desc()
        )
        .all()
    )