function ComparisonTable({
    bfsResult,
    dfsResult
}) {

    return (

        <div className="comparison-container">

            <div className="algo-card">

                <h3>BFS</h3>

                <p>
                    Nodos:
                    {" "}
                    {bfsResult?.nodes_explored ?? "-"}
                </p>

                <p>
                    Tiempo:
                    {" "}
                    {bfsResult?.execution_time ?? "-"}
                </p>

                <p>
                    Ruta:
                    {" "}
                    {bfsResult?.path?.length ?? "-"}
                </p>

            </div>

            <div className="algo-card">

                <h3>DFS</h3>

                <p>
                    Nodos:
                    {" "}
                    {dfsResult?.nodes_explored ?? "-"}
                </p>

                <p>
                    Tiempo:
                    {" "}
                    {dfsResult?.execution_time ?? "-"}
                </p>

                <p>
                    Ruta:
                    {" "}
                    {dfsResult?.path?.length ?? "-"}
                </p>

            </div>

        </div>

    );
}

export default ComparisonTable;