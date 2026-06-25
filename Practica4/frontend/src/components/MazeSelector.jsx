import { mazes } from "../data/mazes";

function MazeSelector({ setMaze, cleanResults}) {

    const loadMaze = (name) => {

        const selected =
            mazes[name].map(
                row => [...row]
            );

        setMaze(selected);
        cleanResults();
    };

    return (

        <select
            onChange={(e) =>
                loadMaze(
                    e.target.value
                )
            }
        >

            <option value="">
                Seleccione laberinto
            </option>

            <option value="maze1">
                Laberinto 1
            </option>

            <option value="maze2">
                Laberinto 2
            </option>

            <option value="maze3">
                Laberinto 3
            </option>

            <option value="maze4">
                Laberinto 4
            </option>

            <option value="maze5">
                Laberinto 5
            </option>

        </select>
    );
}

export default MazeSelector;