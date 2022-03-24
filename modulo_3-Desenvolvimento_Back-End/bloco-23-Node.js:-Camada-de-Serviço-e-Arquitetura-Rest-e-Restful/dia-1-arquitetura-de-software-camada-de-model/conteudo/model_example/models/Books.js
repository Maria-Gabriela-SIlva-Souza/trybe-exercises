const connection = require('./connection');

const getAll = async () => {
  // Se não dessestruturarmos esse array a requisição vem com indormações do banco de dados além das pedidas
  const [ books ] = await connection.execute('SELECT title FROM books;');
  return books;
}

const getByAuthorId = async (id) => {
  const [ booksById ] = await connection.execute('SELECT title FROM books WHERE author_id = ?',  [ id ]);
  return booksById;
}

module.exports = {
  getAll,
  getByAuthorId,
}