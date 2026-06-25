import { useState } from "react";

import api from "./services/api";

import MazeGrid from "./components/MazeGrid";
import Controls from "./components/Controls";
import Results from "./components/Results";
import ComparisonTable from "./components/ComparisonTable";
import MazeSelector from "./components/MazeSelector";
import MazeConfig from "./components/MazeConfig";

import { mazes } from "./data/mazes";

import "./App.css";

function App() {

    const [maze, setMaze] = useState(
        mazes.maze1
    );

    const [start, setStart] = useState(
        []
    );

    const [goal, setGoal] = useState(
        []
    );

    const [editMode, setEditMode] = useState("wall");

    const [result, setResult] = useState(null);

    const [bfsResult, setBfsResult] = useState(null);

    const [dfsResult, setDfsResult] = useState(null);
    
    const [animatedPath, setAnimatedPath] = useState([]);

    const [speed, setSpeed] = useState(150);

    const [isAnimating, setIsAnimating] = useState(false);

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

            animatePath(
                response.data.path
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

            animatePath(
                response.data.path
            );

        } catch (error) {

            console.error(error);

        }
    };


    const animatePath = (path) => {

        if (!path || path.length === 0) {
            setAnimatedPath([]);
            return;
        }

        setAnimatedPath([]);
        setIsAnimating(true);

        let index = 0;

        const interval = setInterval(() => {

            index++;

            setAnimatedPath(
                path.slice(0, index)
            );

            if (index >= path.length) {

                clearInterval(interval);

                setIsAnimating(false);
            }

        }, speed);

    };

    const cleanResults = ()=>{
      setResult(null);

      setBfsResult(null);

      setDfsResult(null);

      setAnimatedPath([]);

      setStart([]);

      setGoal([]);
    };

    const createMaze = (
        rows,
        cols
    ) => {

        const newMaze =
            Array(rows)
            .fill()
            .map(() =>
                Array(cols)
                .fill(0)
            );

        setMaze(newMaze);

        setStart([0,0]);

        setGoal([
            rows - 1,
            cols - 1
        ]);

        cleanResults();
    };

    const clearPath = () => {

        setResult(null);

        setBfsResult(null);

        setDfsResult(null);

        setAnimatedPath([]);
    };


    const clearMaze = () => {
        const confirmDelete = window.confirm(
              "¿Desea limpiar todo el laberinto?"
          );

        if(!confirmDelete){
            return;
        }

        const rows = maze.length;

        const cols = maze[0].length;

        const emptyMaze =
            Array(rows)
            .fill()
            .map(() =>
                Array(cols).fill(0)
            );

        setMaze(emptyMaze);

        setStart([]);

        setGoal([]);

        clearPath();
    };

    const resetMazeConfig = () => {

        setMaze(
            mazes.maze1.map(
                row => [...row]
            )
        );

        setStart([0,0]);

        setGoal([
            mazes.maze1.length - 1,
            mazes.maze1[0].length - 1
        ]);

        clearPath();
    };

    return (

        <div className="container">

            <h1>🤖 RoboMaze</h1>

            <div className="top-panel">

              <MazeConfig
                  createMaze={createMaze}
                  resetMazeConfig={resetMazeConfig}
              />
              <MazeSelector
                  cleanResults={cleanResults}
                  setMaze={setMaze}
              />

              <Controls
                  editMode={editMode}
                  setEditMode={setEditMode}
                  runBFS={runBFS}
                  runDFS={runDFS}
                  clearPath={clearPath}
                  clearMaze={clearMaze}
              />

          </div>

            <div className="speed-control">

                <label>
                    Velocidad:
                </label>

                <select
                    value={speed}
                    onChange={(e) =>
                        setSpeed(
                            Number(
                                e.target.value
                            )
                        )
                    }
                >

                    <option value={50}>
                        Rápida
                    </option>

                    <option value={150}>
                        Media
                    </option>

                    <option value={300}>
                        Lenta
                    </option>

                </select>

            </div>

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