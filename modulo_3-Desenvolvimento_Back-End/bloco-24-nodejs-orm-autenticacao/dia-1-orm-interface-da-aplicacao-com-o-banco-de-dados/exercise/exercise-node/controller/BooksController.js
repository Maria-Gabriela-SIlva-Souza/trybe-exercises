const BooksService = require('../services/BooksService');

const getAll = async (_req, res) => {
  const books = await BooksService.getAll();

  if(!books || books == '') return res.status(404).json({ message: 'Not Found' });

  res.status(200).json(books);
};

module.exports = {
  getAll,
};