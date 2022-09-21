import parsel
import requests


response = requests.get("http://books.toscrape.com/")
# print(response.text)


selector = parsel.Selector(text=response.text)
selectorPrint = selector.css('img.thumbnail').getall()

for thumbnail in selectorPrint:
    print(thumbnail)
