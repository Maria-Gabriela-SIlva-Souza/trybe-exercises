const connection = require('./connection');

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => authorData.map((item) => ({
  id: item.id,
  firstName: item.first_name,
  middleName: item.middle_name,
  lastName: item.last_name}));

// Busca todos os autores do banco.

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;'
  );
  return serialize(authors);
};

/*
Busca uma pessoa autora específica, a partir do seu ID
@param {String} id ID da pessoa autora a ser recuperado
*/
const findById = async (id) => {
  const query =
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?';

  const [authorData] = await connection.execute(query, [id]);

  return serialize(authorData)[0];
};

const createAuthor = async (first_name, middle_name, last_name) => {
  const [author] = await connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [first_name, middle_name, last_name]
  );
  return ({ id: author.insertId, firstName: first_name, middleName: middle_name, lastName: last_name })
}

module.exports = {
  getAll,
  findById,
  createAuthor,
};