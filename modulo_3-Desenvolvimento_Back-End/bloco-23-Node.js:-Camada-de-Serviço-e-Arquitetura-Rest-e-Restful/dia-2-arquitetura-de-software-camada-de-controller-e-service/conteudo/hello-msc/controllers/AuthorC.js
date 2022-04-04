const AuthorS = require('../services/AuthorsS');
const { isValidFindById } = require('../middlewares/validations')

const getAll = async (_req, res) => {
  const authors = await AuthorS.getAll();
  res.status(200).json(authors);
}

const findById = async (req, res) => {
  const { id } = req.params;
  const author = await AuthorS.findById(id);
  isValidFindById(author);

  res.status(200).json(author);
}

const createAuthor = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  const author = await AuthorS.createAuthor(first_name, middle_name, last_name);

  res.status(201).json(author);
}

module.exports = {
  getAll,
  findById,
  createAuthor,
}