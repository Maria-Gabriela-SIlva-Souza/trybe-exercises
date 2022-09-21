import parsel
import requests

URL_BASE = "http://books.toscrape.com/catalogue/"
response = requests.get(URL_BASE + "the-grand-design_405/index.html")
selector = parsel.Selector(response.text)
# print(selector)

title = selector.css(".col-sm-6 h1::text").get()
# print(title)

price = selector.css(".price_color::text").re_first(r"\d+\.\d{2}")
# print(price)

description = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]
# print(description)

# capa = URL_BASE + selector.css(".thumbnail img::attr(src)").get()
capa = URL_BASE + selector.css(".active img::attr(src)").get()
# print(capa)

# print(f'{title}, {price}, {description}, {capa}')
print(title, price, description, capa, sep=", ")
