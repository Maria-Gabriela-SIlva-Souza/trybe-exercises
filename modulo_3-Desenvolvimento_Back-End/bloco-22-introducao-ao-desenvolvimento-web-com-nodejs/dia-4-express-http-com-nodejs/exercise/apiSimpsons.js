const express = require('express');
const app = express();

const simpsonsData = require('./readAndWriteSimpsons')

// Usando async/await pois a requisição de leitura provém de uma promise
app.get('/simpsons', async (_req, res) => {
  const simpsons = await simpsonsData.getSimpsons();
    res.status(200).json(simpsons);
});

app.get('/simpsons/:id', async(req, res) => {
  const simpsons = await simpsonsData.getSimpsons();
  const { id } = req.params;
  const simpsonsId = simpsons.find((s) => s.id === id);

  if(!simpsonsId) { return res.status(404).json({ message: 'simpson not found' }) };
  res.status(202).json(simpsonsId);
});

app.post('/simpsons', async(req, res) => {
  const { id, name } = req.body;
  const simpsons = await simpsonsData.getSimpsons();

  if (simpsons.map(({ id }) => id).includes(id)) {
    return res.status(409).json({ message: 'id already exists' });
  }

  simpsons.push({ id, name });

  await simpsonsData.setSimpsons(simpsons)
  res.status(204).end();

});

app.use((err, _req, res, _next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});