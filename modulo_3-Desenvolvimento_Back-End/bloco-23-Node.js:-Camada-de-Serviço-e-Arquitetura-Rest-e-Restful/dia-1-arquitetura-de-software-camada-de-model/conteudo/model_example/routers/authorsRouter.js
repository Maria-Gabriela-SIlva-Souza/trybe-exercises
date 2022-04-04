const router = require('express').Router();

const Authors = require('../models/AuthorM');

router.get('/', async (_req, res) => {
  const authors = await Authors.getAll();

  res.status(200).json(authors);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Authors.findById(id);

  if(!author) return res.status(404).json({message: 'Not Found'});

  res.status(200).json(author);
});

router.post('/', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if(!Authors.isValid(first_name, middle_name, last_name)) return res.status(400).json({message: 'Dados inválidos'});

  await Authors.create(first_name, middle_name, last_name);
  
  res.status(201).json({message: 'Author criado com sucesso'});
});

module.exports = router;