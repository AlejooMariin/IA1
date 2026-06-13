from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.diagnostico_api import router as diagnostico_router
from app.routes.sintomas_api import router as sintomas_router
from app.routes.fallas_api import router as fallas_router
from app.routes.recomendaciones_api import router as recomendaciones_router
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(diagnostico_router)
app.include_router(sintomas_router)
app.include_router(fallas_router)
app.include_router(recomendaciones_router)

# python -m uvicorn app.main:app --reload