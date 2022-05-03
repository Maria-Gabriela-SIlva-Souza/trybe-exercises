const BooksService = require('../services/BooksService');

const getAll = async (req, res) => {
  const { author } = req.query;

  let books;

  if (author) {
    books = await BooksService.getByAuthor(author);
  } else {
    books = await BooksService.getAll();
  }

  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const books = await BooksService.getById(id);

  if(!books || books == '') return res.status(404).json({ message: 'Book not found' });

  res.status(200).json(books);
};

const create = async (req, res) => {
  const { title, author, pageQuantity, publisher } = req.body;

  await BooksService.create({ title, author, pageQuantity, publisher });

  res.status(201).json({ message: 'Book create' });
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity, publisher } = req.body;

  const bookId = await BooksService.getById(id);

  if (!bookId) return res.status(404).json({ message: 'Book not found' });

  await BooksService.update(id, { title, author, pageQuantity, publisher });

  res.status(200).json({ message: 'Book updated' });
};

const remove = async (req, res) => {
  const { id } = req.params;

  const removed = await BooksService.remove(id);

  if (!removed) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json({ message: 'Book removed' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};