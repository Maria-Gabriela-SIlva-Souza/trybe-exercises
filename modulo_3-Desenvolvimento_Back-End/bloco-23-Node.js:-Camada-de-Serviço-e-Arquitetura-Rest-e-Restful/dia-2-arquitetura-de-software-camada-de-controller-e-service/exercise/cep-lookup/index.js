const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;

const { pingController } = require('./controllers');

app.use(express.json());

app.get('/ping', pingController);

app.listen(PORT, () => console.log(`Exercício de fixação rodando na porta ${PORT}`));