const BooksService = require('../services/BooksService');

const getAll = async (_req, res) => {
  const books = await BooksService.getAll();

  if(!books || books == '') return res.status(404).json({ message: 'Book not found' });

  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const books = await BooksService.getById(id);

  if(!books || books == '') return res.status(404).json({ message: 'Book not found' });

  res.status(200).json(books);
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;

  await BooksService.create({ title, author, pageQuantity });

  res.status(201).json({ message: 'Book create' });
};

module.exports = {
  getAll,
  getById,
  create
};