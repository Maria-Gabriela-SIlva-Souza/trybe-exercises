const express = require('express');
const app = express();
const port = 3000

const Authors = require('./models/Author');
const Books = require('./models/Books');

app.get('/authors', async (_req, res) => {
  const authors = await Authors.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Authors.findById(id);

  if(!author) return res.status(404).json({message: 'Not Found'});

  res.status(200).json(author);
});

app.get('/books', async (_req, res) => {
  const books = await Books.getAll();

  res.status(200).json(books);
});

app.get('/books/:author_id', async (req, res) => {
  const  { author_id } = req.params;
  const booksByAuthorId = await Books.getByAuthorId(author_id);

  if(!booksByAuthorId) return res.status(404).json({message: 'Not Found'});

  res.status(200).json(booksByAuthorId);
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));