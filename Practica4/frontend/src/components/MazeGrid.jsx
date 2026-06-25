function MazeGrid({
    maze,
    start,
    goal,
    path,
    setMaze,
    editMode,
    setStart,
    setGoal
}) {

    const currentNode =
        path.length > 0
            ? path[path.length - 1]
            : null;

    const handleClick = (
            row,
            col
        ) => {

            if(editMode === "start"){

                if(
                    maze[row][col] === 1
                ){
                    return;
                }

                setStart([
                    row,
                    col
                ]);

                return;
            }

            if(editMode === "goal"){

                if(
                    maze[row][col] === 1
                ){
                    return;
                }

                setGoal([
                    row,
                    col
                ]);

                return;
            }

            if(editMode === "wall"){

                if(
                    row === start[0] &&
                    col === start[1]
                ){
                    return;
                }

                if(
                    row === goal[0] &&
                    col === goal[1]
                ){
                    return;
                }

                const newMaze =
                    maze.map(
                        r => [...r]
                    );

                newMaze[row][col] =
                    newMaze[row][col] === 0
                        ? 1
                        : 0;

                setMaze(newMaze);
            }
        };

    return (

        <div>

            {
                maze.map(
                    (row,rowIndex)=>(

                        <div
                            key={rowIndex}
                            className="maze-row"
                        >

                            {
                                row.map(
                                    (cell,colIndex)=>{

                                        let color =
                                            "white";

                                        const isPath =
                                            path.some(
                                                ([r,c]) =>
                                                    r === rowIndex &&
                                                    c === colIndex
                                            );

                                        const isRobot =

                                            currentNode &&

                                            currentNode[0] === rowIndex &&

                                            currentNode[1] === colIndex;

                                        if(cell === 1){

                                            color = "#212121";
                                        }

                                        if(isPath){

                                            color = "#FFD54F";
                                        }

                                        if(
                                            rowIndex === start[0] &&
                                            colIndex === start[1]
                                        ){

                                            color = "#4CAF50";
                                        }

                                        if(
                                            rowIndex === goal[0] &&
                                            colIndex === goal[1]
                                        ){

                                            color = "#F44336";
                                        }

                                        if(isRobot){

                                            color = "#2196F3";
                                        }

                                        return (

                                            <div
                                                key={colIndex}
                                                className={
                                                    isPath
                                                        ? "cell path-cell"
                                                        : "cell"
                                                }
                                                style={{
                                                    backgroundColor:
                                                        color
                                                }}
                                                onClick={() =>
                                                    handleClick(
                                                        rowIndex,
                                                        colIndex
                                                    )
                                                }
                                            />

                                        );
                                    }
                                )
                            }

                        </div>
                    )
                )
            }

        </div>

    );
}

export default MazeGrid;