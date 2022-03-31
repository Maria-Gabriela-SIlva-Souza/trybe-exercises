const express = require('express');
const app = express();
const PORT = 3000;

const { pingController } = require('./controllers');

app.use(express.json());

app.get('/ping', pingController);

app.listen(PORT, () => console.log(`Exercício de fixação rodando na porta ${PORT}`));