import "./MiFormulario.css";

function Historial() {

  const historial = [

    {
      fecha: "12/06/2026",
      falla: "virus"
    },

    {
      fecha: "13/06/2026",
      falla: "memoria_ram_daniada"
    }

  ];

  return (

    <div className="container">

      <div className="card">

        <h2>Historial</h2>

        <p className="subtitle">
          Diagnósticos realizados
        </p>

        <textarea
          readOnly
          value={
            historial
              .map(
                item =>
                  `${item.fecha} - ${item.falla}`
              )
              .join("\n")
          }
        />

      </div>

    </div>

  );
}

export default Historial;