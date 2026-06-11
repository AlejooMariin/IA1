import React, { useState } from "react";
import "./MiFormulario.css";

function MiFormulario() {
  const [texto, setTexto] = useState("");

  const handleChange = (e) => {
    const valor = e.target.value;

    const opciones = {
      cliente: "Información del cliente seleccionada",
      producto: "Información del producto seleccionada",
      pedido: "Información del pedido seleccionada",
    };

    setTexto(opciones[valor] || "");
  };

  const handleClick = () => {
    alert(`Contenido: ${texto}`);
  };

  return (
    <div className="container">
      <div className="card">
        <p className="subtitle">
          Selecciona una opción para visualizar información.
        </p>

        <div className="form-group">
          <label>Tipo de consulta</label>
          <select onChange={handleChange}>
            <option value="">Seleccione una opción</option>
            <option value="cliente">Cliente</option>
            <option value="producto">Producto</option>
            <option value="pedido">Pedido</option>
          </select>
        </div>

        <div className="form-group">
          <label>Diagnostico</label>
          <textarea
            value={texto}
            readOnly
            placeholder="Aquí aparecerá la información..."
            rows="8"
            />
        </div>

        {/* <button onClick={handleClick}>
          Consultar
        </button> */}
      </div>
    </div>
  );
}

export default MiFormulario;