import time

from app.algorithms.bfs import bfs
from app.algorithms.dfs import dfs

class MazeService:

    @staticmethod
    def solve_bfs(request):

        start_time = time.perf_counter()

        path, explored = bfs(
            request.maze,
            request.start,
            request.goal
        )

        end_time = time.perf_counter()

        return {
            "path": path,
            "nodes_explored": explored,
            "execution_time": round(
                end_time - start_time,
                6
            )
        }

    @staticmethod
    def solve_dfs(request):

        start_time = time.perf_counter()

        path, explored = dfs(
            request.maze,
            request.start,
            request.goal
        )

        end_time = time.perf_counter()

        return {
            "path": path,
            "nodes_explored": explored,
            "execution_time": round(
                end_time - start_time,
                6
            )
        }