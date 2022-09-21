from parsel import Selector
import requests


# Retorno de todo o html da página
response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
# print(selector)

# Retorno de todos os títulos
titles = selector.css(".product_pod h3 a::attr(title)").getall()
# print(titles)

# Retorno de todos os preços
prices = selector.css(".product_price .price_color::text").getall()
# print(prices)

# Combinando tudo podemos buscar os produtos
# em em seguida buscar os valores individualmente
for product in selector.css(".product_pod"):
    title = product.css("h3 a::attr(title)").get()
    price = product.css(".price_color::text").get()
    print(title, price)
