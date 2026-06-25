def dfs(maze,start,goal):

    rows = len(maze)
    cols = len(maze[0])

    stack = [(start,[start])]

    visited = set()

    explored = 0

    directions = [
        (-1,0),
        (1,0),
        (0,-1),
        (0,1)
    ]

    while stack:

        current, path = stack.pop()

        if tuple(current) in visited:
            continue

        visited.add(tuple(current))

        explored += 1

        if current == goal:
            return path, explored

        for dr, dc in directions:

            nr = current[0] + dr
            nc = current[1] + dc

            if (
                0 <= nr < rows and
                0 <= nc < cols and
                maze[nr][nc] == 0
            ):
                stack.append(
                    ([nr,nc], path + [[nr,nc]])
                )

    return [], explored