const express = require('express');
const { Store } = require('./models');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  Store.findAll().then(dados => {
    res.status(200).json(dados);
  }).catch((e) => {
    res.status(500).json({message: 'Deu ruim !'});
  })
})

app.get('/:id', (req, res) => {
  const { id } = req.params;

  Store.findByPk(id).then(dados => {
    res.status(200).json(dados);
  }).catch((e) => {
    res.status(500).json({message: 'Deu ruim !'});
  })
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});