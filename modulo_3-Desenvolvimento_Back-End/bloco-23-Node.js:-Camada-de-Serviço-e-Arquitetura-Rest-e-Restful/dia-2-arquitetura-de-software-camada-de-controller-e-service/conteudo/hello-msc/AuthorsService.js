// Cria uma string com o nome completo da pessoa autora

const AuthorModels = require('./models/AuthorModels');

const serialize = (authorData) => authorData.map((item) => getNewAuthor(
  {
    id: item.id,
    firstName: item.first_name,
    middleName: item.middle_name,
    lastName: item.last_name
  }
));

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
}

const getAll = async () => {
  const authors = await AuthorModels.getAll();

  return authors.map(serialize);
}

const findById = async (id) => {
  const author = await AuthorModels.findById(id);

  if (!author) return null;

  return serialize(author);
};

const createAuthor = async (firstName, middleName, lastName) => {
  const validAuthor = isValid(firstName, middleName, lastName);

  if (!validAuthor) return false;

  const [ author ] = await AuthorModels.createAuthor(firstName, middleName, lastName);

  authorId = author.insertId;

  return serialize({
    id: authorId,
    firstName,
    middleName,
    lastName,
  });
};

module.exports = {
  getAll,
  findById,
  createAuthor,
}