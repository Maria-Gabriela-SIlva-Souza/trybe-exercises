const booksRouter = require('express').Router();

const { getAll, getById, create, update } = require('../controller/BooksController');

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

booksRouter.put(
  '/:id',
  update,
);

module.exports = booksRouter;