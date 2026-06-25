function Results({ result }) {

    if (!result) return null;

    return (

        <div className="results">

            <h2>
                Resultado
            </h2>

            <p>
                Nodos explorados:
                {" "}
                {result.nodes_explored}
            </p>

            <p>
                Tiempo:
                {" "}
                {result.execution_time}
                {" "}segundos
            </p>

            <p>
                Longitud ruta:
                {" "}
                {result.path.length}
            </p>

            <h3>
                Ruta encontrada
            </h3>

            <ul>

                {
                    result.path.map(
                        (node, index) => (

                            <li key={index}>
                                ({node[0]},
                                {node[1]})
                            </li>

                        )
                    )
                }

            </ul>

        </div>

    );
}

export default Results;