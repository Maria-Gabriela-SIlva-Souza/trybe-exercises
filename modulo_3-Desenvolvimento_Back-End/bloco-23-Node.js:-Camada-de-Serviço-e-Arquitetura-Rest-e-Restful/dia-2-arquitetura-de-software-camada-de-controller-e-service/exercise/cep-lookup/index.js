require('dotenv').config();

const express = require('express');
const PORT = process.env.PORT;
const app = express();

const { findAddressByCepC } = require('./controller/CepC');
const errorMiddleware = require('./middlewares/error');

app.use(express.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ "message": "pong!" });
});

app.get('/cep/:cep', findAddressByCepC);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Exercício rodando na porta ${PORT}`));