from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.maze_routes import router

app = FastAPI(
    title="RoboMaze API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    router,
    prefix="/search",
    tags=["Search"]
)

@app.get("/")
def root():
    return {
        "message":"RoboMaze API"
    }