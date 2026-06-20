import { useEffect, useState } from "react";
import api from "../services/api";

export default function Bitacora() {

    const [logs, setLogs] = useState([]);

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        const res = await api.get("/bitacoras");
        setLogs(res.data);
    };

    return (
        <div>
            <h1>Bitácora</h1>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Acción</th>
                        <th>Descripción</th>
                        <th>Fecha</th>
                    </tr>
                </thead>

                <tbody>
                    {logs.map(l => (
                        <tr key={l.id}>
                            <td>{l.id}</td>
                            <td>{l.accion}</td>
                            <td>{l.descripcion}</td>
                            <td>{l.fecha}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}