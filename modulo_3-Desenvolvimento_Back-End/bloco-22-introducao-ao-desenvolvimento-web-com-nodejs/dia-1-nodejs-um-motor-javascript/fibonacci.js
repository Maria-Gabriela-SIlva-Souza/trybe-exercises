// Exercicio Bônus 2

const readline = require('readline-sync');

const jogar = () => {
  console.log(`\nNão pode ser um número inferior a 0, digite novamente`)
  fibonacci();
}

const fibonacci = () => {
  
  const num = readline.questionInt('Digite a quantidade sequencial que deseja: ');
  
  if (num === 1) console.log(`\nA sequência de ${num} número em fibonacci é [0]`)
  else if (num < 0) jogar()
  else {
    fibonacciN = [];
    fibonacciN[0] = 0;
    fibonacciN[1] = 1;
    for (let i = 2; i <= num - 1; i++) {
      fibonacciN[i] = fibonacciN[i - 2] + fibonacciN[i - 1];
    }
    return console.log(`\nA sequência de ${num} números em fibonacci é [${fibonacciN}]`);
  }
};

fibonacci();