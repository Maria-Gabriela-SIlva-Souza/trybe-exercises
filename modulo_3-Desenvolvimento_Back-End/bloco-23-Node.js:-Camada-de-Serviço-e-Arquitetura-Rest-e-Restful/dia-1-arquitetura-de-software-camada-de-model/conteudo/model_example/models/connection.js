const mysql = require('mysql2/promise');

// createPool mantém conexão com o mysql ativo para não ser necessário ativá-la a cada querie
const connection = mysql.createPool({
  user: 'gabriela',
  password: 'maria5287355',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;

// Através desse connection que realizamos a conexão da aplicação com o MySql