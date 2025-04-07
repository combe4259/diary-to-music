import json

class CreateRcmdDto:
    def __init__(self, user_id: str, diary: str, emotions: list = [], filters: dict = {}):
        self.user_id = user_id
        self.diary = diary
        self.emotions = emotions
        self.filters = filters
        self.musics = []
        
    def to_json(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)