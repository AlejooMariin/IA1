import "./Navbar.css";

function Navbar({ setModulo, onLogout }) {

    return (

        <div className="navbar">

            <button onClick={() => setModulo("diagnostico")}>
                Diagnóstico
            </button>

            <button onClick={() => setModulo("sintomas")}>
                Síntomas
            </button>

            <button onClick={() => setModulo("fallas")}>
                Fallas
            </button>

            <button onClick={() => setModulo("recomendaciones")}>
                Recomendaciones
            </button>

            <button onClick={() => setModulo("historial")}>
                Historial
            </button>

            <button onClick={onLogout}>
                Salir
            </button>

        </div>

    );
}

export default Navbar;