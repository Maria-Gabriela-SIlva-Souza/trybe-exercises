const fs = require('fs');

function writeToFile(nomeDoArquivo, conteudo) {
  fs.writeFileSync(nomeDoArquivo, conteudo);
  return 'ok';
}

module.exports = writeToFile;