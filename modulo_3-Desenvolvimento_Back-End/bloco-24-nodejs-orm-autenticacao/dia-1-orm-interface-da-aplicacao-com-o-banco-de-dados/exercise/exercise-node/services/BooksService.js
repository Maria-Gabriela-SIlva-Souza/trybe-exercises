const { Books } = require('../models');

const getAll = async () => {
  const books = await Books.findAll({ order: [['title', 'ASC']] });
  return books;
};

const getById = async (id) => {
  const books = await Books.findByPk(id);
  return books;
};

const getByAuthor = async (author) => {
  const books = await Books.findAll({ 
    where: { author },
    order: [['title', 'ASC']]
  });
  return books;
};

const create = async ({title, author, pageQuantity, publisher}) => {
  const create = await Books.create({title, author, pageQuantity, publisher});
  return create;
};

const update = async (id, {title, author, pageQuantity,publisher}) => {
  const [ books ] = await Books.update({title, author, pageQuantity, publisher}, { where: { id } });
  return books;
};

const remove = async (id) => {
  const removed = await Books.destroy(
    { where: { id } },
  );

  return removed;
};

module.exports = {
  getAll,
  getById,
  getByAuthor,
  create,
  update,
  remove
};