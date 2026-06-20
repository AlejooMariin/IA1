import os
import requests

import requests

response = requests.post(
    "http://localhost:8000/preguntas/chat",
    json={
        "mensaje": "horario"
    }
)

print(response.json())

# API_URL = os.getenv(
#     "API_URL",
#     "http://localhost:8000/preguntas/chat"
# )


# def consultar_api(mensaje):

#     try:

#         response = requests.post(
#             API_URL,
#             json={
#                 "mensaje": mensaje
#             }
#         )

#         response.raise_for_status()

#         return response.json()["respuesta"]

#     except Exception as e:

#         print(e)

#         return (
#             "Error al consultar el servidor."
#         )