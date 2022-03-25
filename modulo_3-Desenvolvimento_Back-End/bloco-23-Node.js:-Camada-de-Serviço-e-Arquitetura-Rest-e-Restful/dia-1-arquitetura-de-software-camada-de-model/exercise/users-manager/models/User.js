// Começamos importando a conexão com o banco
const connection = require('./connection');

// Faremos a função `formatUser`
// Note que não realizamos destructuring da senha, pois não precisaremos dela
// Note, também, que renomeamos os campos fist_name e last_name para firstName e lastName, respectivamente
const formatUser = ({ id, first_name: firstName, last_name: lastName, email }) => {
  // A única coisa que precisamos fazer agora é criar um objeto com os nomes dos campos alterados
  // e sem o campo passowrd
  return {
    id,
    firstName,
    lastName,
    email,
  };
}

// Função responsável por criar o usuário no banco de dados
const create = ({ firstName, lastName, email, password }) => {
  const query = 'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?,?,?,?)';
  // Ao invés de chamarmos connection como uma function, agora utilizamos diretamente o método `execute`
  return connection.execute(query, [firstName, lastName, email, password])
    // Obtemos o resultado da inserção e o utilizamos para obter o ID recém inserido
    .then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
}

const findAll = async () => {
  // Mais uma vez, chamamos connection.execute para executar nossa query.
  const [ result ] = await connection.execute('SELECT * from users_crud.users')

  const formatResult = result.map(formatUser);

  return formatResult;
}



module.exports = { findAll, create }