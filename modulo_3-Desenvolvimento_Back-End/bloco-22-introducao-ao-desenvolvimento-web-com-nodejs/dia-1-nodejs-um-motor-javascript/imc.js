// Exercício 1

const readline = require('readline-sync');

const imc = () => {
  const peso = readline.questionFloat('Qual o seu peso? (em kg / separar gramas com ponto e não vírgula)');
  const altura = readline.questionInt('Qual a sua altura? (em cm)');
  
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imcCalc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`IMC: ${imcCalc}`);
}

imc();

module.exports = imc;