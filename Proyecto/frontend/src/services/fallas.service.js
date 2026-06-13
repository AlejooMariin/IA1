import api from "./api";

export const obtenerFallas = async () => {

    const response = await api.get(
        "/fallas"
    );

    return response.data;
};

export const crearFalla = async (
    nombre
) => {

    const response = await api.post(
        "/fallas",
        null,
        {
            params: {
                nombre
            }
        }
    );

    return response.data;
};

export const actualizarFalla = async (
    anterior,
    nuevo
) => {

    const response = await api.put(
        "/fallas",
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

export const eliminarFalla = async (
    nombre
) => {

    const response = await api.delete(
        "/fallas",
        {
            params: {
                nombre
            }
        }
    );

    return response.data;
};