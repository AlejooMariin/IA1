import { useState } from "react";

import api from "./services/api";

import MazeGrid from "./components/MazeGrid";
import Controls from "./components/Controls";
import Results from "./components/Results";
import ComparisonTable from "./components/ComparisonTable";
import MazeSelector from "./components/MazeSelector";

import { mazes } from "./data/mazes";

import "./App.css";

function App() {

    const [maze, setMaze] = useState(
        mazes.maze1
    );

    const [start, setStart] = useState(
        [0, 0]
    );

    const [goal, setGoal] = useState(
        [4, 4]
    );

    const [editMode, setEditMode] =
        useState("wall");

    const [result, setResult] =
        useState(null);

    const [bfsResult, setBfsResult] =
        useState(null);

    const [dfsResult, setDfsResult] =
        useState(null);

    const runBFS = async () => {

        try {

            const response =
                await api.post(
                    "/search/bfs",
                    {
                        maze,
                        start,
                        goal
                    }
                );

            setResult(response.data);

            setBfsResult(
                response.data
            );

        } catch (error) {

            console.error(error);

        }
    };

    const runDFS = async () => {

        try {

            const response =
                await api.post(
                    "/search/dfs",
                    {
                        maze,
                        start,
                        goal
                    }
                );

            setResult(response.data);

            setDfsResult(
                response.data
            );

        } catch (error) {

            console.error(error);

        }
    };

    return (

        <div className="container">

            <h1>🤖 RoboMaze</h1>

            <MazeSelector
                setMaze={setMaze}
            />

            <Controls
                editMode={editMode}
                setEditMode={setEditMode}
                runBFS={runBFS}
                runDFS={runDFS}
            />

            <div className="legend">

                <p>
                    🟩 Inicio
                </p>

                <p>
                    🟥 Meta
                </p>

                <p>
                    ⬛ Obstáculo
                </p>

                <p>
                    🟨 Ruta encontrada
                </p>

            </div>

            <MazeGrid
                maze={maze}
                start={start}
                goal={goal}
                path={result?.path || []}
                setMaze={setMaze}
                editMode={editMode}
                setStart={setStart}
                setGoal={setGoal}
            />

            <Results
                result={result}
            />

            <ComparisonTable
                bfsResult={bfsResult}
                dfsResult={dfsResult}
            />

        </div>

    );
}

export default App;