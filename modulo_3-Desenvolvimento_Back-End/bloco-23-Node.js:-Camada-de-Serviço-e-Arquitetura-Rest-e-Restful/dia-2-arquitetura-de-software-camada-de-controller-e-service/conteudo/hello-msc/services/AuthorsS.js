const AuthorM = require('../models/AuthorM');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const getAll = async () => {
  const authors = await AuthorM.getAll();

  return authors.map((a) => getNewAuthor(a));
}

const findById = async (id) => {
  const author = await AuthorM.findById(id);

  if (!author) return null;

  return getNewAuthor(author);
};

const createAuthor = async (first_name, middle_name, last_name) => {
  const validAuthor = isValid(first_name, middle_name, last_name);

  if (!validAuthor) return false;

  const author = await AuthorM.createAuthor(first_name, middle_name, last_name);

  return getNewAuthor(author)
};

module.exports = {
  getAll,
  findById,
  createAuthor,
  isValid,
}