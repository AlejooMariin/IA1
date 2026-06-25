function ComparisonTable({
    bfsResult,
    dfsResult
}) {

    return (

        <table border="1">

            <thead>
                <tr>
                    <th>Algoritmo</th>
                    <th>Nodos</th>
                    <th>Tiempo</th>
                    <th>Ruta</th>
                </tr>
            </thead>

            <tbody>

                <tr>
                    <td>BFS</td>

                    <td>
                        {bfsResult?.nodes_explored || "-"}
                    </td>

                    <td>
                        {bfsResult?.execution_time || "-"}
                    </td>

                    <td>
                        {bfsResult?.path?.length || "-"}
                    </td>
                </tr>

                <tr>
                    <td>DFS</td>

                    <td>
                        {dfsResult?.nodes_explored || "-"}
                    </td>

                    <td>
                        {dfsResult?.execution_time || "-"}
                    </td>

                    <td>
                        {dfsResult?.path?.length || "-"}
                    </td>
                </tr>

            </tbody>

        </table>
    );
}

export default ComparisonTable;