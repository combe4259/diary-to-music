from flask import Response, jsonify, request
from flask_restx import Api, Namespace, Resource, fields

from src.music.youtubeAPIService import YoutubeAPIService
from src.rcmd.rcmdService import RcmdService
from src.rcmd.rcmdDto import CreateRcmdDto

api = Namespace('rcmd', description='API operations', path='/api/rcmd', validate=True)

filters = api.model('Filters', {
    'genre': fields.String(required=False, description='Genre'),
    'artist': fields.String(required=False, description='Artist'),
    'year': fields.String(required=False, description='Year'),
    'mood': fields.String(required=False, description='Mood')
})

req = api.model('Rcmd', {
    'user_id': fields.String(required=True, description='User ID'),
    'diary': fields.String(required=True, description='Diary'),
    'emotions': fields.List(fields.String, required=False, description='Emotions'),
    'filters': fields.Nested(filters, required=False, description='Filters')
})

@api.response(200, 'Success')


@api.route('/openai')
class OpenAIRcmdController(Resource):
    def __init__(self, *args, **kwargs):
        self.service = RcmdService()
        self.music_service = YoutubeAPIService()
        super().__init__(*args, **kwargs)
    
    @api.expect(req)
    @api.response(200, 'Success', model=req)
    def post(self): # Recommend  
        user_id = request.json['user_id']
        diary = request.json['diary']
        emotions = request.json['emotions'] if 'emotions' in request.json else []
        filters = request.json['filters'] if 'filters' in request.json else {}
        
        dto = CreateRcmdDto(user_id, diary, emotions, filters)
        result = self.service.recommend(dto)        
        
        for music in result.musics:
            music['url'] = self.music_service.search(music['title'], music['artist'])
        
        return result.musics
    
    def put(self): # Train
        return {'message': 'Hello, world!'}