FROM python:3.10

# Set the working directory
WORKDIR /workspace

# Copy the current directory contents into the container at /workspace
COPY . .

RUN pip install --upgrade pip

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

CMD ["python", "app.py"]