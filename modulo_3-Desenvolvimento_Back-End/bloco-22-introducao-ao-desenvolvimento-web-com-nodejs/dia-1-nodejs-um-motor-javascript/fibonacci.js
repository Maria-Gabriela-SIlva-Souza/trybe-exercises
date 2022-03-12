const readline = require('readline-sync');

const fibonacci = () => {
  
  let num = readline.questionInt('Digite a quantidade sequencial que deseja: ');

  fibonacciN = [];
  fibonacciN[0] = 0;
  fibonacciN[1] = 1;
  for (let i = 2; i <= num - 1; i++) {
    fibonacciN[i] = fibonacciN[i - 2] + fibonacciN[i - 1];
  }
  return console.log(`\nA sequência de ${num} números da sequência fibonacci é [${fibonacciN}]`);
};

fibonacci();