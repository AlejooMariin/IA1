from datetime import datetime
from datetime import timedelta

from jose import jwt
from passlib.context import CryptContext

from app.config import SECRET_KEY
from app.config import ALGORITHM

import bcrypt

print("BCRYPT VERSION:", bcrypt.__version__)

import bcrypt

print("BCRYPT MODULE:", bcrypt)
print("BCRYPT VERSION:", getattr(bcrypt, "__version__", "NO VERSION"))

pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)

pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)

def hash_password(password: str):

    print("HASH DESACTIVADO PARA PRUEBA")

    return "123456"


def verify_password(
    plain_password: str,
    hashed_password: str
):

    return pwd_context.verify(
        plain_password,
        hashed_password
    )


def create_access_token(data: dict):

    payload = data.copy()

    payload["exp"] = (
        datetime.utcnow()
        + timedelta(hours=8)
    )

    return jwt.encode(
        payload,
        SECRET_KEY,
        algorithm=ALGORITHM
    )