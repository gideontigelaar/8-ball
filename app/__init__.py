from flask import Flask
from flask_login import LoginManager
import pymysql
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.secret_key = os.environ["SECRET_KEY"]

DB_CONFIG = {
    "host": os.environ["DB_HOST"],
    "user": os.environ["DB_USER"],
    "password": os.environ["DB_PASSWORD"],
    "db": os.environ["DB_NAME"],
    "charset": "utf8mb4",
    "cursorclass": pymysql.cursors.DictCursor,
}

def get_db():
    return pymysql.connect(**DB_CONFIG)

login_manager = LoginManager(app)
login_manager.login_view = "login"

from app.models import User

@login_manager.user_loader
def load_user(user_id):
    return User.get_by_id(int(user_id))

from app import routes