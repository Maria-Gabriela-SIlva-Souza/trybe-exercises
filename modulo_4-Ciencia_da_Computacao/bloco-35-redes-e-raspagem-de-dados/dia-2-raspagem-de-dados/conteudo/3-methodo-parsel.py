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
# for product in selector.css(".product_pod"):
#     title = product.css("h3 a::attr(title)").get()
#     price = product.css(".price_color::text").get()
#     print(title, price)

# Existe uma classe next, que podemos recuperar
#  a url através do seu elemento âncora
# Não esquecendo que temos a parte raiz do site
# http://books.toscrape.com/
next_page_url = selector.css(".next a::attr(href)").get()
print(next_page_url)
