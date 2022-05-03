const { Books } = require('../models');

const getAll = async () => {
  const books = await Books.findAll();
  return books;
};

const getById = async (id) => {
  const books = await Books.findByPk(id);
  return books;
};

module.exports = {
  getAll,
  getById
};