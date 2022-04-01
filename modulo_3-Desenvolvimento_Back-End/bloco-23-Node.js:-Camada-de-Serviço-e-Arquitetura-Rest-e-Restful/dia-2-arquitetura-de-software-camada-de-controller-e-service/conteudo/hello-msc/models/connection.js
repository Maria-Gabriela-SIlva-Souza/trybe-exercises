const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'gabriela',
  password: 'maria5287355',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;