const connection = require('./connection');

const findByCep = async (cep) => {
  const query = 'SELECT * from ceps WHERE cep =  ?';

  const [ authorData ] = await connection.execute(query, [cep]);

  return authorData;
};

module.exports = {
  findByCep,
}