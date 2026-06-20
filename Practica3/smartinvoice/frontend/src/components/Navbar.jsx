import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <nav style={styles.nav}>

            <h2 style={styles.logo}>SmartInvoice</h2>

            <div style={styles.links}>

                <Link to="/dashboard" style={styles.link}>Dashboard</Link>

                <Link to="/facturas" style={styles.link}>Facturas</Link>
                <Link to="/proveedores" style={styles.link}>Proveedores</Link>
                <Link to="/bitacora" style={styles.link}>Bitácora</Link>

            </div>

            <button onClick={logout} style={styles.button}>
                Logout
            </button>

        </nav>
    );
}

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#1f2937",
        color: "white"
    },
    logo: {
        margin: 0
    },
    links: {
        display: "flex",
        gap: "15px"
    },
    link: {
        color: "white",
        textDecoration: "none"
    },
    button: {
        backgroundColor: "#ef4444",
        color: "white",
        border: "none",
        padding: "6px 12px",
        cursor: "pointer"
    }
};