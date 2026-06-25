import {
    FaMap
} from "react-icons/fa";

import { mazes } from "../data/mazes";

function MazeSelector({
    setMaze,
    cleanResults
}) {

    const loadMaze = (name) => {

        if(!name) return;

        const selected =
            mazes[name].map(
                row => [...row]
            );

        setMaze(selected);

        cleanResults();
    };

    return (

        <div className="card">

            <h3>
                Laberintos
            </h3>

            <select
                className="maze-select"
                onChange={(e)=>
                    loadMaze(
                        e.target.value
                    )
                }
            >

                <option value="">
                    Seleccione
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

        </div>

    );
}

export default MazeSelector;