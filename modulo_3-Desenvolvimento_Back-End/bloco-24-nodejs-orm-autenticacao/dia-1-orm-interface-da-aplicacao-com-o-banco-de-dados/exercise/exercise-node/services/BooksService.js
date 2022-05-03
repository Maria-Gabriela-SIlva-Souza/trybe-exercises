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

const update = async (id, {title, author, pageQuantity}) => {
  const [ books ] = await Books.update({title, author, pageQuantity}, { where: { id } });
  return books;
};

module.exports = {
  getAll,
  getById,
  create,
  update
};