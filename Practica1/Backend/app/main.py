from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.rutas_api import router as rutas_router
from app.routes.ciudades_api import router as ciudades_router
from app.routes.conexiones_api import router as conexiones_router


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(rutas_router)
app.include_router(ciudades_router)
app.include_router(conexiones_router)

# python -m uvicorn app.main:app --reload