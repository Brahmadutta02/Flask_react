from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/data',methods=['GET'])
def get_data():
    data = {
        "message":"Nobody is perfect, but you're so close it's scary 👌👸"
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)

    