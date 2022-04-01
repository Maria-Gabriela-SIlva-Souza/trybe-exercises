const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'gabriela',
  password: 'maria5287355',
  host: 'localhost',
  database: 'cep_lookup'
});

module.exports = connection;