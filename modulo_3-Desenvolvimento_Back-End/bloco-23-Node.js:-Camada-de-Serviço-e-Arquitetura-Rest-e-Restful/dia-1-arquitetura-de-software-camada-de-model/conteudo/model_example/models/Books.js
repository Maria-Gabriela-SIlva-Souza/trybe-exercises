const connection = require('./connection');
const Authors = require('./Author');

const getAll = async () => {
  // Se não dessestruturarmos esse array a requisição vem com indormações do banco de dados além das pedidas
  const [ books ] = await connection.execute('SELECT title, author_id FROM books;');
  return books;
}

const getByAuthorId = async (id) => {
  const [ booksById ] = await connection.execute('SELECT title, author_id FROM books WHERE author_id = ?',  [ id ]);

  if (booksById.length === 0) return null;

  return booksById;
}

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await Authors.findById(authorId))) return false;

  return true;
}

const create = async (title, author_id) => {
  connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)', [title, author_id]
  )
}

module.exports = {
  getAll,
  getByAuthorId,
  isValid,
  create
}