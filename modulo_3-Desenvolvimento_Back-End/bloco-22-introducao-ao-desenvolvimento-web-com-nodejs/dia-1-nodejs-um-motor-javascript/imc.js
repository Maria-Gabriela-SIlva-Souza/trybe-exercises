// Exercício 1

const readline = require('readline-sync');

const imc = () => {
  const peso = readline.questionFloat('Qual o seu peso? (em kg / separar gramas com ponto e não vírgula): ');
  const altura = readline.questionInt('Qual a sua altura? (em cm): ');
  const situacao = 'Sua classificação é:';
  
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imcCalc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`IMC: ${imcCalc}`);

  if (imcCalc < 18.5) `${situacao} Abaixo do peso (magreza)`
  else if (imcCalc >= 18.5 && imcCalc <= 24.9) console.log(`${situacao} Peso normal`)
  else if (imcCalc >= 25 && imcCalc <= 29.9) console.log(`${situacao} Acima do peso (sobrepeso)`)
  else if (imcCalc >= 30 && imcCalc <= 34.9) console.log(`${situacao} Obesidade grau I`)
  else if (imcCalc >= 35 && imcCalc <= 39.9) console.log(`${situacao} Obesidade grau II`)
  else console.log(`${situacao} Obesidade grau III e IV`) 
}

imc();

module.exports = imc;