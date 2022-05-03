const booksRouter = require('express').Router();

const { getAll } = require('../controller/BooksController');

booksRouter.get(
  '/',
  getAll,
);

module.exports = booksRouter;