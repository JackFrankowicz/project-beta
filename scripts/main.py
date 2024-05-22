# scripts/main.py
from openai import OpenAI
from utils import load_config, get_api_key

# Load the configuration and API key
config = load_config()
api_key = get_api_key()

# Initialize the OpenAI client with the API key
client = OpenAI(api_key=api_key)

def main():
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Hello, world!"}
        ]
    )

    print(response.choices[0].message.content.strip())

if __name__ == "__main__":
    main()
