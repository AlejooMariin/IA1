function RutasTable({ rutas }) {

    return (

        <table border="1">

            <thead>

                <tr>
                    <th>Ruta</th>
                    <th>Distancia</th>
                </tr>

            </thead>

            <tbody>

                {
                    rutas.map(
                        (ruta, index) => (

                            <tr key={index}>

                                <td>
                                    {
                                        ruta.ruta.join(" ➜ ")
                                    }
                                </td>

                                <td>
                                    {ruta.distancia}
                                    {" "}km
                                </td>

                            </tr>
                        )
                    )
                }

            </tbody>

        </table>
    );
}

export default RutasTable;