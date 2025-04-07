from flask import json
from openai import OpenAI
from ..rcmd.rcmdDto import CreateRcmdDto
from src.config import *
from src.llm.defaultLLMService import DefaultLLMService

class OpenAIService(DefaultLLMService):
    def __init__(self):
        self.model = OPENAI_LLM_MODEL
        self.client = OpenAI(api_key=OPENAI_API_KEY)
        
        with open("src/llm/prompt.txt", "r") as file:
            self.prompt = file.read()
            # print(self.prompt)

    def recommend(self, createRcmdDto: CreateRcmdDto):
        try:
            completion = self.client.chat.completions.create(
                model= self.model,
                response_format={ "type": "json_object"},
                messages=[
                    {"role": "system", "content": self.prompt},
                    {"role": "user", "content": createRcmdDto.to_json()}
                ]
            )
            return json.loads(completion.choices[0].message.content)
        except Exception as e:
            print(e)
            return {}
    
    def train(self, user_input):
        return "Hello, world!"