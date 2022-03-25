const express = require('express');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares');

// Criamos a aplicação do express
const app = express();

// Instalamos o middleware que faz a leitura e conversão do corpo das requisições em JSON
app.use(bodyParser.json());

// Dizemos para o express que toda requisição enviada para `POST /user` deve ser tratada pelo middleware `createUser`
app.post('/user', middlewares.createUser);

app.get('/user', middlewares.getAllUsers);

app.use(middlewares.error);

// Definimos a porta
const PORT = 3000;

app.listen(PORT, () => console.log(`Exercício de fixação rodando na porta ${PORT}`));