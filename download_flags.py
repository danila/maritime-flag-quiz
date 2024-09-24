import os
import time
import requests
from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.retry import Retry

flags = [
    {"letter": "~", "name": "Code Pennant", "url": "https://upload.wikimedia.org/wikipedia/commons/5/5c/ICS_Answer.svg"},
    {"letter": "A", "name": "Alpha", "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Alfa_flag.svg"},
    {"letter": "B", "name": "Bravo", "url": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Bravo_flag.svg"},
    {"letter": "C", "name": "Charlie", "url": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Charlie_flag.svg"},
    {"letter": "D", "name": "Delta", "url": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Delta_flag.svg"},
    {"letter": "E", "name": "Echo", "url": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Echo_flag.svg"},
    {"letter": "F", "name": "Foxtrot", "url": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Foxtrot_flag.svg"},
    {"letter": "G", "name": "Golf", "url": "https://upload.wikimedia.org/wikipedia/commons/2/27/Golf-flag.svg"},
    {"letter": "H", "name": "Hotel", "url": "https://upload.wikimedia.org/wikipedia/commons/d/da/Hotel_flag.svg"},
    {"letter": "I", "name": "India", "url": "https://upload.wikimedia.org/wikipedia/commons/3/36/India_flag.svg"},
    {"letter": "J", "name": "Juliet", "url": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Juliett_flag.svg"},
    {"letter": "K", "name": "Kilo", "url": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Kilo_flag.svg"},
    {"letter": "L", "name": "Lima", "url": "https://upload.wikimedia.org/wikipedia/commons/0/08/Lima_flag.svg"},
    {"letter": "M", "name": "Mike", "url": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Mike_flag.svg"},
    {"letter": "N", "name": "November", "url": "https://upload.wikimedia.org/wikipedia/commons/6/68/November_flag.svg"},
    {"letter": "O", "name": "Oscar", "url": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Oscar_flag.svg"},
    {"letter": "P", "name": "Papa", "url": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Papa_flag.svg"},
    {"letter": "Q", "name": "Quebec", "url": "https://upload.wikimedia.org/wikipedia/commons/6/68/Quebec_flag.svg"},
    {"letter": "R", "name": "Romeo", "url": "https://upload.wikimedia.org/wikipedia/commons/0/09/Romeo-flag.svg"},
    {"letter": "S", "name": "Sierra", "url": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Sierra_flag.svg"},
    {"letter": "T", "name": "Tango", "url": "https://upload.wikimedia.org/wikipedia/commons/3/37/Tango_flag.svg"},
    {"letter": "U", "name": "Uniform", "url": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Uniform_flag.svg"},
    {"letter": "V", "name": "Victor", "url": "https://upload.wikimedia.org/wikipedia/commons/4/41/Victor-flag.svg"},
    {"letter": "W", "name": "Whiskey", "url": "https://upload.wikimedia.org/wikipedia/commons/9/91/Whiskey_flag.svg"},
    {"letter": "X", "name": "X-Ray", "url": "https://upload.wikimedia.org/wikipedia/commons/1/14/Xray_flag.svg"},
    {"letter": "Y", "name": "Yankee", "url": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Yankee-flag.svg"},
    {"letter": "Z", "name": "Zulu", "url": "https://upload.wikimedia.org/wikipedia/commons/3/30/Zulu_flag.svg"},
]

def download_image(url, file_name, max_retries=5):
    session = requests.Session()
    retry = Retry(total=max_retries, backoff_factor=0.1, status_forcelist=[500, 502, 503, 504])
    adapter = HTTPAdapter(max_retries=retry)
    session.mount('http://', adapter)
    session.mount('https://', adapter)

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }

    try:
        response = session.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        with open(file_name, 'wb') as file:
            file.write(response.content)
        print(f"Downloaded: {file_name}")
    except requests.exceptions.RequestException as e:
        print(f"Failed to download {url}: {str(e)}")

# Create a directory to store the images
if not os.path.exists('public/flags'):
    os.makedirs('public/flags')

# Download each flag
for flag in flags:
    file_name = f"public/flags/{flag['letter']}_{flag['name'].replace(' ', '_')}.svg"
    download_image(flag['url'], file_name)
    time.sleep(1)  # Add a small delay between requests to be polite to the server

print("All flags processed!")
