from flask import render_template
from app import app

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/game')
def game():
    return render_template('game.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/register')
def register():
    return render_template('register.html')