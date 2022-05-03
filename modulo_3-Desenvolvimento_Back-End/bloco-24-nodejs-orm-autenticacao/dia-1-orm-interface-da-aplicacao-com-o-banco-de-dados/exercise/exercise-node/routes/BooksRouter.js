const booksRouter = require('express').Router();

const { getAll, getById, create, update, remove } = require('../controller/BooksController');

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

booksRouter.delete(
  '/:id',
  remove,
);

module.exports = booksRouter;