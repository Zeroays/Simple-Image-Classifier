from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('image.html')

@app.route('/img')
def image_page():
    return render_template('image.html')

@app.route('/webcam')
def webcam_page():
    return render_template('webcam.html')

