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
  const author = await AuthorM.createAuthor(first_name, middle_name, last_name);
  return getNewAuthor({id: author.id, firstName: first_name, middleName: middle_name, lastName: last_name})
};

module.exports = {
  getAll,
  findById,
  createAuthor,
}