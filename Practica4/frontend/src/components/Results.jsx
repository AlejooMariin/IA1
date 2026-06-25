import {
    FaClock,
    FaRoute,
    FaSearch
} from "react-icons/fa";

function Results({ result }) {

    if (!result) return null;

    return (

        <div className="results-card">

            <h2>
                Resultado
            </h2>

            <div className="stats-grid">

                <div className="stat-box">

                    <FaSearch />

                    <h3>
                        {result.nodes_explored}
                    </h3>

                    <p>
                        Nodos
                    </p>

                </div>

                <div className="stat-box">

                    <FaClock />

                    <h3>
                        {result.execution_time}
                    </h3>

                    <p>
                        Segundos
                    </p>

                </div>

                <div className="stat-box">

                    <FaRoute />

                    <h3>
                        {result.path.length}
                    </h3>

                    <p>
                        Ruta
                    </p>

                </div>

            </div>

            <div className="path-container">

                    {
                        result.path.map(
                            (node,index)=>(

                                <span
                                    key={index}
                                    className="path-node"
                                >
                                    ({node[0]},{node[1]})
                                </span>

                            )
                        )
                    }

            </div>

        </div>

    );
}

export default Results;