docker build . -t llm-api-server
docker run -d --rm --name llm-api-server -p 80:3000 llm-api-server