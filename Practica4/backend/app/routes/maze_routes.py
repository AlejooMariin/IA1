from fastapi import APIRouter

from app.models.maze import MazeRequest
from app.services.maze_service import MazeService

router = APIRouter()

@router.post("/bfs")
def run_bfs(request: MazeRequest):

    return MazeService.solve_bfs(request)

@router.post("/dfs")
def run_dfs(request: MazeRequest):

    return MazeService.solve_dfs(request)