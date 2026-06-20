import React, {
    useState,
    useEffect
} from "react";

import {
    obtenerRecomendaciones,
    crearRecomendacion,
    actualizarRecomendacion,
    eliminarRecomendacion
} from "../../services/recomendaciones.service";

import {
    obtenerFallas
} from "../../services/fallas.service";



function Recomendaciones() {

    const [falla, setFalla] = useState("");

    const [
        recomendacion,
        setRecomendacion
    ] = useState("");

    const [
        fallaAnterior,
        setFallaAnterior
    ] = useState("");

    const [
        editando,
        setEditando
    ] = useState(null);

    const [
        recomendaciones,
        setRecomendaciones
    ] = useState([]);

    const [
        fallas,
        setFallas
    ] = useState([]);

    const cargarRecomendaciones =
        async () => {

        try {

            const data =
                await obtenerRecomendaciones();

            setRecomendaciones(
                data
            );

        } catch(error) {

            console.error(
                error
            );

        }
    };

    const cargarFallas =
        async () => {

        try {

            const data =
                await obtenerFallas();

            setFallas(
                data
            );

        } catch(error) {

            console.error(
                error
            );

        }
    };

    const guardar =
        async () => {

        try {

            await crearRecomendacion(
                falla,
                recomendacion
            );

            setFalla("");
            setRecomendacion("");

            cargarRecomendaciones();

        } catch(error) {

            console.error(
                error
            );

        }
    };

    const actualizar =
        async () => {

        try {

            await actualizarRecomendacion(
                falla,
                recomendacion
            );

            setEditando(
                null
            );

            setFalla("");
            setRecomendacion("");
            setFallaAnterior("");

            cargarRecomendaciones();

        } catch(error) {

            console.error(
                error
            );

        }
    };

    const eliminar =
        async (falla) => {

        try {

            await eliminarRecomendacion(
                falla
            );

            cargarRecomendaciones();

        } catch(error) {

            console.error(
                error
            );

        }
    };

    const editar =
        (item) => {

        setFalla(
            item.falla
        );

        setFallaAnterior(
            item.falla
        );

        setRecomendacion(
            item.recomendacion
        );

        setEditando(
            item.falla
        );
    };

    useEffect(() => {

        cargarRecomendaciones();

        cargarFallas();

    }, []);

    return (

        <div className="container">

            <div className="card">

                <h2>
                    CRUD Recomendaciones
                </h2>

                <div
                    className="form-group"
                >

                    <label>
                        Falla
                    </label>

                    <select
                        value={falla}
                        onChange={(e) =>
                            setFalla(
                                e.target.value
                            )
                        }
                    >

                        <option value="">
                            Seleccione una falla
                        </option>

                        {
                            fallas.map(
                                (item,index) => (

                                    <option
                                        key={index}
                                        value={item}
                                    >
                                        {item}
                                    </option>
                                )
                            )
                        }

                    </select>

                </div>

                <div
                    className="form-group"
                >

                    <label>
                        Recomendación
                    </label>

                    <textarea
                        rows="5"
                        value={recomendacion}
                        onChange={(e) =>
                            setRecomendacion(
                                e.target.value
                            )
                        }
                    />

                </div>

                <button
                    onClick={() => {

                        if(
                            editando !== null
                        ){
                            actualizar();
                        }
                        else{
                            guardar();
                        }

                    }}
                >

                    {
                        editando !== null
                        ? "Actualizar"
                        : "Guardar"
                    }

                </button>

                <br />
                <br />

                <div
                    className="lista-sintomas"
                >

                    {
                        recomendaciones.map(
                            (
                                item,
                                index
                            ) => (

                            <div
                                key={index}
                                className="sintoma-item"
                            >

                                <div>

                                    <strong>
                                        {
                                            item.falla
                                        }
                                    </strong>

                                    <br />

                                    {
                                        item.recomendacion
                                    }

                                </div>

                                <div
                                    style={{
                                        display:"flex",
                                        gap:"5px"
                                    }}
                                >

                                    <button
                                        className="btn-editar"
                                        onClick={() =>
                                            editar(
                                                item
                                            )
                                        }
                                    >

                                        <span className="material-symbols-outlined">
                                            edit
                                        </span>

                                    </button>

                                    <button
                                        className="btn-eliminar"
                                        onClick={() =>
                                            eliminar(
                                                item.falla
                                            )
                                        }
                                    >

                                        <span className="material-symbols-outlined">
                                            delete
                                        </span>

                                    </button>

                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    );
}

export default Recomendaciones;