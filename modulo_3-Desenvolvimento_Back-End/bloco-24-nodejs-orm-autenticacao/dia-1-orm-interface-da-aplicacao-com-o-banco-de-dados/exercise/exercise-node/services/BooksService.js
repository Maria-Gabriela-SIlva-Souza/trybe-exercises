const { Books } = require('../models');

const getAll = async () => {
  const books = await Books.findAll();
  return books;
};

const getById = async (id) => {
  const books = await Books.findByPk(id);
  return books;
};

const create = async ({title, author, pageQuantity}) => {
  const create = await Books.create({title, author, pageQuantity});
  return create;
};

module.exports = {
  getAll,
  getById,
  create
};