from pydantic import BaseModel
from typing import List

class MazeRequest(BaseModel):
    maze: List[List[int]]
    start: List[int]
    goal: List[int]

class SearchResponse(BaseModel):
    path: List[List[int]]
    nodes_explored: int
    execution_time: float