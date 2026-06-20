import { useEffect, useState } from "react";
import api from "../services/api";
import Card from "../components/Card";

export default function Dashboard() {

    const [data, setData] = useState({
        total_facturas: 0,
        procesadas: 0,
        pendientes: 0,
        proveedores: 0,
        usuarios: 0
    });

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {
        try {
            const res = await api.get("/dashboard");
            setData(res.data);
        } catch (error) {
            console.log("Error dashboard:", error);
        }
    };

    return (
        <div style={styles.container}>

            <h1>📊 Dashboard</h1>

            <div style={styles.grid}>

                <Card title="Total Facturas" value={data.total_facturas} />

                <Card title="Procesadas" value={data.procesadas} />

                <Card title="Pendientes" value={data.pendientes} />

                <Card title="Proveedores" value={data.proveedores} />

                <Card title="Usuarios" value={data.usuarios} />

            </div>

        </div>
    );
}

const styles = {
    container: {
        padding: "20px"
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "15px",
        marginTop: "20px"
    }
};