import os
from dotenv import load_dotenv

load_dotenv()

OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')
OPENAI_LLM_MODEL = os.environ.get('OPENAI_LLM_MODEL')

PORT = os.environ.get('PORT')
DEBUG = os.environ.get('MODE') == "development"

SPOTIFY_CLIENT_ID = os.environ.get('SPOTIFY_CLIENT_ID')
SPOTIFY_CLIENT_SECRET = os.environ.get('SPOTIFY_CLIENT_SECRET')

YOUTUBE_API_KEY = os.environ.get('YOUTUBE_API_KEY')