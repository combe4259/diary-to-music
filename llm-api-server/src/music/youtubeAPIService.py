from googleapiclient.discovery import build

from src.config import YOUTUBE_API_KEY

class YoutubeAPIService:
    def __init__(self):
        self.service = build('youtube', 'v3', developerKey=YOUTUBE_API_KEY)
        
    def search(self, title, artist):
        search_query = f"{title} {artist} official music video"
        request = self.service.search().list(
            part='snippet',
            q=search_query,
            type='video',
            maxResults=1
        )
        response = request.execute()
        
        # get url
        video_id = response['items'][0]['id']['videoId']
        url = f"https://www.youtube.com/watch?v={video_id}"
        return url