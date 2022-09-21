import requests


response = requests.get('https://api.github.com/users')
json = response.json()
# print(json)

for pos in json:
    print(pos['login'], pos['url'])
