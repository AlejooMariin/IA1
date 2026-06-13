import api from "./api";

export const obtenerRecomendaciones = async () => {

    const response = await api.get(
        "/recomendaciones"
    );

    return response.data;
};

export const crearRecomendacion = async (
    falla,
    recomendacion
) => {

    const response = await api.post(
        "/recomendaciones",
        null,
        {
            params: {
                falla,
                recomendacion
            }
        }
    );

    return response.data;
};

export const actualizarRecomendacion = async (
    falla_anterior,
    falla_nueva,
    recomendacion
) => {

    const response = await api.put(
        "/recomendaciones",
        null,
        {
            params: {
                falla_anterior,
                falla_nueva,
                recomendacion
            }
        }
    );

    return response.data;
};

export const eliminarRecomendacion = async (
    falla
) => {

    const response = await api.delete(
        "/recomendaciones",
        {
            params: {
                falla
            }
        }
    );

    return response.data;
};