from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine

from app.routers import (
    auth,
    proveedores,
    facturas,
    bitacora,
    dashboard
)

app = FastAPI(title="SmartInvoice")

# =========================
# CORS (PRODUCCIÓN)
# =========================
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://*.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================
# DB INIT (solo dev)
# =========================
Base.metadata.create_all(bind=engine)

# =========================
# ROUTERS
# =========================
app.include_router(auth.router)
app.include_router(proveedores.router)
app.include_router(facturas.router)
app.include_router(bitacora.router)
app.include_router(dashboard.router)

@app.get("/")
def root():
    return {"message": "SmartInvoice API"}