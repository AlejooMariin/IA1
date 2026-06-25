from collections import deque

def bfs(maze, start, goal):

    rows = len(maze)
    cols = len(maze[0])

    queue = deque()
    queue.append((start,[start]))

    visited = set()
    visited.add(tuple(start))

    explored = 0

    directions = [
        (-1,0),
        (1,0),
        (0,-1),
        (0,1)
    ]

    while queue:

        current, path = queue.popleft()

        explored += 1

        if current == goal:
            return path, explored

        for dr, dc in directions:

            nr = current[0] + dr
            nc = current[1] + dc

            if (
                0 <= nr < rows and
                0 <= nc < cols and
                maze[nr][nc] == 0 and
                (nr,nc) not in visited
            ):

                visited.add((nr,nc))

                queue.append(
                    ([nr,nc], path + [[nr,nc]])
                )

    return [], explored