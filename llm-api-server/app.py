from src.config import *
from flask import *
from flask_restx import Api, Resource
from src.rcmd.rcmdController import api as rcmdNamespace

def create_app():
    app = Flask(__name__)
    api = Api(
        app=app,
        version='1.0',
        title='Music Recommendation API with LLM',
        doc='/docs'
    )
    api.add_namespace(rcmdNamespace)
    return app


if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=PORT, debug=DEBUG)