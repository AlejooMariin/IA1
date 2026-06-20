import os
import time
import requests

from dotenv import load_dotenv

load_dotenv()

TOKEN = os.getenv("TELEGRAM_TOKEN")

LAST_UPDATE_ID = 0

def get_updates():

    url = (
        f"https://api.telegram.org/bot{TOKEN}/getUpdates"
    )

    response = requests.get(url)

    return response.json()

def send_message(chat_id, texto):

    url = (
        f"https://api.telegram.org/bot{TOKEN}/sendMessage"
    )

    payload = {
        "chat_id": chat_id,
        "text": texto
    }

    requests.post(
        url,
        json=payload
    )

def consultar_api(mensaje):

    response = requests.post(
        "http://localhost:8000/preguntas/chat",
        json={
            "mensaje": mensaje
        }
    )

    return response.json()["respuesta"]


while True:

    try:

        data = get_updates()

        for item in data["result"]:

            update_id = item["update_id"]

            if update_id <= LAST_UPDATE_ID:
                continue

            LAST_UPDATE_ID = update_id

            chat_id = item["message"]["chat"]["id"]

            mensaje = item["message"]["text"]

            print(
                f"Mensaje recibido: {mensaje}"
            )

            respuesta = consultar_api(
                mensaje
            )

            send_message(
                chat_id,
                respuesta
            )

        time.sleep(2)

    except Exception as e:

        print(e)

        time.sleep(5)