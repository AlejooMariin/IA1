import os
import requests

from dotenv import load_dotenv

load_dotenv()

TOKEN = os.getenv("TELEGRAM_TOKEN")
CHAT_ID = os.getenv("TELEGRAM_CHAT_ID")

def notificar(titulo, mensaje):

    texto = (
        f"{titulo}\n"
        f"{mensaje}"
    )

    url = (
        f"https://api.telegram.org/bot{TOKEN}/sendMessage"
    )

    response = requests.post(
        url,
        json={
            "chat_id": CHAT_ID,
            "text": texto
        }
    )

    print(response.status_code)
    print(response.text)