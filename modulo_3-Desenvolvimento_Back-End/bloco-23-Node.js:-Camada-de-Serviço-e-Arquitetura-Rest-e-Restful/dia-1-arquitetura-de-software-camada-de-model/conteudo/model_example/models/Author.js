// Arquivo onde executaremos as queries relacionadas a author

const connection = require('./connection');

// função para ajustar a forma de saída das chaves para camelCase
const serialize = ({ id, first_name, middle_name, last_name }) => {
  return {
    id,
    firstName: first_name,
    middleName: middle_name,
    lastName: last_name
  }
}

// Requisições demandam tempo, sendo assim, sempre as faremos de modo assíncrono
const getAll = async () => {
  // Se não dessestruturarmos esse array a requisição vem com indormações do banco de dados além das pedidas
  const [ authors ] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
  return authors.map(serialize);
}

module.exports = {
  getAll,
}