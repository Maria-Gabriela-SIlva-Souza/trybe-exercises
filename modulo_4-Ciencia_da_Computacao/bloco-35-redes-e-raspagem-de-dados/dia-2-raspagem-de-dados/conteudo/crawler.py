import requests
# import time


# Problemas quando realizamos requisições demais ao mesmo tempo
# for _ in range(15):
#     response = requests.get("https://www.cloudflare.com/rate-limit-test/")
#     print(response.status_code)

# Resolução
# for _ in range(15):
#     response = requests.get("https://www.cloudflare.com/rate-limit-test/")
#     print(response.status_code)
#     time.sleep(6)


# TIMEOUT

# Requisição com problemas por timeout
# response = requests.get("https://httpbin.org/delay/10", timeout=2)
# print(response.status_code)

# Resolução
try:
    response = requests.get("https://httpbin.org/delay/10", timeout=2)
except requests.Timeout:
    # DOCUMENTAÇÃO
    response = requests.get("https://httpbin.org/delay/10", timeout=15)
finally:
    print(response.status_code)
