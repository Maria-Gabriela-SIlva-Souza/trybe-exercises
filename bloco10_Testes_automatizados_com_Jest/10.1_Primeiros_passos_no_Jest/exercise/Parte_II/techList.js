// A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:
// {
//   tech: 'nomeTecnologia',
//   name: name,
// }

const techList = (array, name) => {
  if (array.length === 0) return 'Vazio!';
  const map = array.sort().map((array) => {
    return {
      tech: array,
      name,
    }
  })
  return map;
}

console.log(techList(['Dev', 'Front', 'Ala'], 'Gabriela'))

module.exports = techList;