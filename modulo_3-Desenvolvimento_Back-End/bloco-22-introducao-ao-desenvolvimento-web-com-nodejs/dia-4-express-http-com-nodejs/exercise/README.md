1. Crie uma rota GET /ping
  - Sua rota deve retornar o seguinte JSON: { message: 'pong' }

2. Crie uma rota POST /hello
  - Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
  - Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .

3. Crie uma rota POST /greetings
  - Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
  - Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
  - Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .

4. Crie uma rota PUT /users/:name/:age .
  - Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" } .

5. Crie uma API de dados das personagens de Simpsons
  - Dados da API localizados em simpsons.json

6. Crie um endpoint GET /simpsons
  - O endpoint deve retornar um array com todos os simpsons.