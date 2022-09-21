import parsel
import requests


response = requests.get("http://books.toscrape.com/")
# print(response.text)


selector = parsel.Selector(text=response.text)
print(selector.css('img.thumbnail').getall()[0])
