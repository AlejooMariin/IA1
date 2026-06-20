import os
import requests

TOKEN = os.getenv(
    "TELEGRAM_TOKEN"
)

def get_updates():

    url = (
        f"https://api.telegram.org/bot{TOKEN}/getUpdates"
    )

    response = requests.get(url)

    return response.json()

def send_message(
    chat_id,
    message
):

    url = (
        f"https://api.telegram.org/bot{TOKEN}/sendMessage"
    )

    payload = {
        "chat_id": chat_id,
        "text": message
    }

    requests.post(
        url,
        json=payload
    )