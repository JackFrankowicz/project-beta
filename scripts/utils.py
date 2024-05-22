# scripts/utils.py
import os
import yaml
from dotenv import load_dotenv

def load_config(config_path='config/config.yaml'):
    with open(config_path, 'r') as file:
        return yaml.safe_load(file)

def get_api_key():
    load_dotenv()
    return os.getenv('OPENAI_API_KEY')
