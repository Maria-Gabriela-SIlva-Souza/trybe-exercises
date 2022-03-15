const fs = require('fs').promises;

const nomeDoArquivo = 'simpsons.json';

const readFileSimpsons = async () => {
  const simpsonDoc = await
    fs.readFile(nomeDoArquivo, 'utf8')
    .then((data) => JSON.parse(data))
    .catch('erro na requisição')

  return simpsonDoc;
}

readFileSimpsons();

// Exercicio 4.1

// const readSimpsonsData = () => {
//   readFileSimpsons()
//   .then((result) => result.map((d) => console.log(`${d.id} - ${d.name}`)))
//   .catch((err) => {
//     console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
//   });
// }

// readSimpsonsData();


// // Exercicio 4.2

// const readSimpsonsId = async (idSelected) => {
//   const simpsonDoc = await readFileSimpsons()

//   const chosenSimpson = simpsonDoc.find((simpson) => simpson.id === (idSelected).toString());

//   if (!chosenSimpson) {
//     throw new Error('id não encontrado');
//   }

//   return console.log(chosenSimpson);
// }

// readSimpsonsId(1);


// // Exercicio 4.3

// const readSimpsonsDeleteIds = async () => {
//   const simpsonDoc = await readFileSimpsons()

//   const filterSimpson = simpsonDoc.filter((simpson) => simpson.id != '6' && simpson.id != '10');

//   if (!filterSimpson) {
//     throw new Error('Requisição não encontrada');
//   }

//   return console.log(filterSimpson);
// }

// readSimpsonsDeleteIds();


// // Exercicio 4.4

// const readSimpsonAndWrite = async () => {
//   const simpsonDoc = await readFileSimpsons()

//   const filterSimpson = simpsonDoc
//     .filter((simpson) => simpson.id === '1' || simpson.id === '2' || simpson.id === '3' || simpson.id === '4');

//   await fs.writeFile('./simpsonFamily.json', JSON.stringify(filterSimpson))
//   .then(() => {
//     console.log('Arquivo salvo');
//   })
//   .catch(() => {
//     console.error('err');
//   });
// }

// readSimpsonAndWrite();


// // Exercicio 4.5

// const addPerson = async () => {
//   const simpsonDoc = await readFileSimpsons()

//   const personNelson = simpsonDoc
//     .filter(simpson => ['1', '2', '3', '4'].includes(simpson.id) || simpson.id === 'Nelson Muntz');

//   await fs.writeFile('./simpsonFamily.json', JSON.stringify(personNelson))
//   .then(() => {
//     console.log('Arquivo salvo');
//   })
//   .catch(() => {
//     console.error('err');
//   });
// }

// addPerson();


// // Exercicio 4.6

// // Importamos o módulo de promises do fs
// const fs = require('fs').promises;

// function replaceNelson () {
//   // Realizamos a leitura do arquivo
//   return fs.readFile('./simpsonsFamily.json', 'utf-8')
//     // Interpretamos o conteúdo como JSON
//     .then((fileContent) => JSON.parse(fileContent))
//     // Filtramos o array para remover o personagem Nelson
//     .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
//     // Criamos um novo Array contendo a personagem Maggie
//     .then((simpsonsWithoutNelson) => simpsonsWithoutNelson
//       .concat([{ id: '8', name: 'Maggie Simpson' }]))
//     // Escrevemos o novo array no arquivo
//     .then((simpsonsWithMaggie) =>
//       fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie)));
// }