import api from "./api";

// OBTENER
export const obtenerDiagnosticos = async () => {

    const response = await api.get(
        "/diagnosticos"
    );

    return response.data;
};

// CREAR
export const crearDiagnostico = async (
    nombre,
    sintomas
) => {

    const response = await api.post(
        "/diagnosticos",
        null,
        {
            params: {
                nombre,
                sintomas
            }
        }
    );

    return response.data;
};

// ACTUALIZAR
export const actualizarDiagnostico = async (
    anterior,
    nuevo,
    sintomas
) => {

    const response = await api.put(
        "/diagnosticos",
        null,
        {
            params: {
                anterior,
                nuevo,
                sintomas
            }
        }
    );

    return response.data;
};

// ELIMINAR
export const eliminarDiagnostico = async (
    nombre
) => {

    const response = await api.delete(
        "/diagnosticos",
        {
            params: {
                nombre
            }
        }
    );

    return response.data;
};