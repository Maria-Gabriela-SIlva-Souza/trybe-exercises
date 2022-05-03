const booksRouter = require('express').Router();

const { getAll, getById, create } = require('../controller/BooksController');

booksRouter.get(
  '/',
  getAll,
);

booksRouter.get(
  '/:id',
  getById,
);

booksRouter.post(
  '/',
  create,
);

module.exports = booksRouter;