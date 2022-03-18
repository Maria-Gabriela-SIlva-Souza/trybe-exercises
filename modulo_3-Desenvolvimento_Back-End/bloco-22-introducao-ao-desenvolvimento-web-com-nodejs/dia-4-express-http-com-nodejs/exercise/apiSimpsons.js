const express = require('express');
const app = express();

const simpsonsData = require('./readSimpsons')

// Usando async/await pois a requisição de leitura provém de uma promise
app.get('/simpsons', async(_req, res) => {
  const simpsons = await simpsonsData.getSimpsons();

  res.status(200).json(simpsons);
});

app.use((err, _req, res, _next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});