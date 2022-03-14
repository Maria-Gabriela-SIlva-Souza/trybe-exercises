const fs = require('fs').promises;

const nomeDoArquivo = 'simpsons.json';

const readSimpsonsData = () => {
  fs.readFile(nomeDoArquivo, 'utf8')
  .then((data) => JSON.parse(data))
  .then((result) => result.map((d) => console.log(`${d.id} - ${d.name}`)))
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
  });
}

readSimpsonsData();