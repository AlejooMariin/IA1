import api from "./api";

export const obtenerSintomas = async () => {

    const response = await api.get(
        "/sintomas"
    );

    return response.data;
};

export const crearSintoma = async (
    nombre
) => {

    const response = await api.post(
        "/sintomas",
        null,
        {
            params: {
                nombre
            }
        }
    );

    return response.data;
};

export const actualizarSintoma = async (
    anterior,
    nuevo
) => {

    const response = await api.put(
        "/sintomas",
        null,
        {
            params: {
                anterior,
                nuevo
            }
        }
    );

    return response.data;
};

export const eliminarSintoma = async (
    nombre
) => {

    const response = await api.delete(
        "/sintomas",
        {
            params: {
                nombre
            }
        }
    );

    return response.data;
};