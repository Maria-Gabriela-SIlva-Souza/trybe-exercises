// Arquivo onde executaremos as queries relacionadas a author

const connection = require('./connection');

// Requisições demandam tempo, sendo assim, sempre as faremos de modo assíncrono

const getAll = async () => {
  const result = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');

  return result;
}

module.exports = {
  getAll,
}