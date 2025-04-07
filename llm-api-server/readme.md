# LLM API Server README

## Server Architecture
```mermaid
block-beta
columns 1

Request
space

block:rcmd:1
    columns 1
    A["Rcmd Controller"] 
    B["Rcmd Service"]
end

space
space

block:ext:1
    block:openai
        C["OpenAI API"]
    end
    block:youtube
        D["Youtube API"]
    end
end

Request --> rcmd
rcmd --> youtube
rcmd --> openai

style ext fill:#0000,stroke:#333,stroke-width:0px;
style Request fill:#0000,stroke:#333,stroke-width:0px;
```


## API Route

```mermaid
graph LR
    A[Backend Server] -->|1. Request| B[API Server]
    B -->|6. Response| A
    B -->|2. Request| C[OpenAI]
    C -->|3. Response| B
    B -->|4. Request| D[Youtube Data API]
    D -->|5. Response| B
```

### POST /api/rcmd/openai
- Recommend three songs based on the input diary.

#### Request format
- `emotion` and `filter` is optional

```json
{
    "user_id": "string",
    "diary": "string",
    "emotion": [
        "string"
    ],
    "filter": {
        "genre": "string",
        "artist": "string",
        "year": "string",
        "mood": "string"
    }
}
```
#### Response format
```json
[
    {
        "title": "string",
        "artist": "string",
        "url": "string"
    },
    {
        "title": "string",
        "artist": "string",
        "url": "string"
    },
    {
        "title": "string",
        "artist": "string",
        "url": "string"
    }
]
```

### PUT /api/rcmd/openai *(not implemented)*
- next recommendation will be based on the previous recommendation
- this request is saved in the database using this format

#### Request format
```json
{
    "user_id": "string",
    "music": {
        "title": "string",
        "artist": "string",
        "url": "string"
    }
}
```

#### Response format
```json
{
    "message": "string"
}
```
