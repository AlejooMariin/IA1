from fastapi import FastAPI

from app.routes.rutas_api import router as rutas_router
from app.routes.ciudades_api import router as ciudades_router

app = FastAPI()

app.include_router(rutas_router)
app.include_router(ciudades_router)

# uvicorn app.main:app --reload