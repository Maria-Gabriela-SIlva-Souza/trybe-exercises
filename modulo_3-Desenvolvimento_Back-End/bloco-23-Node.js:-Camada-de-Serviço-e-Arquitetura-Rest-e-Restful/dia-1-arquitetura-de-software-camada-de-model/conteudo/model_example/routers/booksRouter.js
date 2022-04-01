const router = require('express').Router();

const Books = require('../models/BooksM');

router.get('/', async (_req, res) => {
  const books = await Books.getAll();

  res.status(200).json(books);
});

router.get('/:author_id', async (req, res) => {
  const  { author_id } = req.params;
  const booksByAuthorId = await Books.getByAuthorId(author_id);

  if(!booksByAuthorId) return res.status(404).json({message: 'Not Found'});

  res.status(200).json(booksByAuthorId);
});

router.post('/', async (req, res) => {
  const { title, author_id } = req.body;

  if(!await Books.isValid(title, author_id)) return res.status(400).json({message: 'Dados inválidos'});

  await Books.create(title, author_id);
  
  res.status(201).json({message: 'Livro criado com sucesso'});
});

module.exports = router;