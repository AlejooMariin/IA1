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

    const handleClick = (
        row,
        col
    ) => {

        if(editMode === "start"){

            setStart([row,col]);
            return;
        }

        if(editMode === "goal"){

            setGoal([row,col]);
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

                                        if(cell === 1)
                                            color =
                                            "black";

                                        const isPath =
                                            path.some(
                                                ([r,c]) =>
                                                    r === rowIndex &&
                                                    c === colIndex
                                            );

                                        if(isPath)
                                            color =
                                            "yellow";

                                        if(
                                            rowIndex === start[0] &&
                                            colIndex === start[1]
                                        ){
                                            color =
                                            "green";
                                        }

                                        if(
                                            rowIndex === goal[0] &&
                                            colIndex === goal[1]
                                        ){
                                            color =
                                            "red";
                                        }

                                        return (

                                            <div
                                                key={colIndex}
                                                className="cell"
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