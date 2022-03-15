const fs = require('fs').promises;

const nomeDoArquivo = 'simpsons.json';

const readFileSimpsons = async () => {
  const simpsonDoc = await
    fs.readFile(nomeDoArquivo, 'utf8')
    .then((data) => JSON.parse(data))
    .catch('erro na requisição')

  return simpsonDoc;
}

// Exercicio 4.1

// const readSimpsonsData = () => {
//   readFileSimpsons()
//   .then((result) => result.map((d) => console.log(`${d.id} - ${d.name}`)))
//   .catch((err) => {
//     console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
//   });
// }

// readSimpsonsData();


// Exercicio 4.2

// const readSimpsonsId = async (idSelected) => {
//   const simpsonDoc = await readFileSimpsons()

//   const chosenSimpson = simpsonDoc.find((simpson) => simpson.id === (idSelected).toString());

//   if (!chosenSimpson) {
//     throw new Error('id não encontrado');
//   }

//   return console.log(chosenSimpson);
// }

// readSimpsonsId(1);


// Exercicio 4.3

// const readSimpsonsDeleteIds = async () => {
//   const simpsonDoc = await readFileSimpsons()

//   const filterSimpson = simpsonDoc.filter((simpson) => simpson.id != '6' && simpson.id != '10');

//   if (!filterSimpson) {
//     throw new Error('Requisição não encontrada');
//   }

//   return console.log(filterSimpson);
// }

// readSimpsonsDeleteIds();


// Exercicio 4.4

const readSimpsonsWrite = async () => {
  const simpsonDoc = await readFileSimpsons()

  const filterSimpson = simpsonDoc
    .filter((simpson) => simpson.id === '1' || simpson.id === '2' || simpson.id === '3' || simpson.id === '4');

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(filterSimpson))
  .then(() => {
    console.log('Arquivo salvo');
  })
  .catch(() => {
    console.error('err');
  });
}

readSimpsonsWrite();