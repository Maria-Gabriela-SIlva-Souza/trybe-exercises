const fs = require('fs').promises;

const nomeDoArquivo = 'simpsons.json';

// Exercicio 4.1

// const readSimpsonsData = () => {
//   fs.readFile(nomeDoArquivo, 'utf8')
//   .then((data) => JSON.parse(data))
//   .then((result) => result.map((d) => console.log(`${d.id} - ${d.name}`)))
//   .catch((err) => {
//     console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
//   });
// }

// readSimpsonsData();


// Exercicio 4.2

// const readSimpsonsId = async (idSelected) => {
//   const simpsonDoc = await
//     fs.readFile(nomeDoArquivo, 'utf8')
//     .then((data) => JSON.parse(data))

//   const chosenSimpson = simpsonDoc.find((simpson) => simpson.id === (idSelected).toString());

//   if (!chosenSimpson) {
//     throw new Error('id não encontrado');
//   }

//   return console.log(chosenSimpson);
// }

// readSimpsonsId(1);


// Exercicio 4.3

const readSimpsonsDeleteIds = async () => {
  const simpsonDoc = await
    fs.readFile(nomeDoArquivo, 'utf8')
    .then((data) => JSON.parse(data))

  const filterSimpson = simpsonDoc.filter((simpson) => simpson.id != '6' && simpson.id != '10');

  if (!filterSimpson) {
    throw new Error('Requisição não encontrada');
  }

  return console.log(chosenSimpson);
}

readSimpsonsDeleteIds();