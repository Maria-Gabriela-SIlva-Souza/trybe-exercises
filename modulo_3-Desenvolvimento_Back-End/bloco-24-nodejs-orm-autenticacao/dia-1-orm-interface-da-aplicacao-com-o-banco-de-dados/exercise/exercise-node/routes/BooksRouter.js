const booksRouter = require('express').Router();

const { getAll, getById } = require('../controller/BooksController');

booksRouter.get(
  '/',
  getAll,
);

booksRouter.get(
  '/:id',
  getById,
);

module.exports = booksRouter;