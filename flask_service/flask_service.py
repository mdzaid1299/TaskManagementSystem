import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

DJANGO_API_URL = "http://127.0.0.1:8000/api/tasks/"

@app.route('/flask-tasks', methods=['GET'])
def get_tasks():
    response = requests.get(DJANGO_API_URL)
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(port=5000, debug=True)
