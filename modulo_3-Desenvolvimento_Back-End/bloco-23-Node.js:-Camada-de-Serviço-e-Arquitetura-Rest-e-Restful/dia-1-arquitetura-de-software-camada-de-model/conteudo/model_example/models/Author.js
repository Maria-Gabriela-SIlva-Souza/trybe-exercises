// Arquivo onde executaremos as queries relacionadas a author

const connection = require('./connection');

// Função realizada para concatenar o nome e trazer o nome completo
const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [ firstName, middleName, lastName ].filter((name) => name).join(' ');
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName
  }
}

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
  return authors.map(serialize).map(getNewAuthor);
}

module.exports = {
  getAll,
}