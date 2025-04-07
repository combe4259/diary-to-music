from src.rcmd.rcmdDto import CreateRcmdDto
from src.llm.openAIService import OpenAIService


class RcmdService:    
    def __init__(self):
        self.openAIService = OpenAIService()
    
    def recommend(self, createRcmdDto: CreateRcmdDto) -> CreateRcmdDto:
        result = self.openAIService.recommend(createRcmdDto)
        createRcmdDto.musics = result['musics'] if 'musics' in result else []
        createRcmdDto.emotions = result['emotions'] if 'emotions' in result else []
        
        return createRcmdDto
        