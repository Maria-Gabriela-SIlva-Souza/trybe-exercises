const readline = require('readline-sync');

const calculaFatorial = () => {

  const numero = readline.questionInt('Digite um número: ');

  if (isNaN(numero)) 'Não existe fatorial de um texto';
  
  if (!Number.isInteger(numero) || numero < 0) 'Não existe fatorial de um número não natural';

  if (numero === 0 || numero === 1) resultado = 1
  else {  
  let resultado = numero;
  let primeiroMultipicador = numero - 1;
  for (let i = primeiroMultipicador; i > 1; i--) {
      resultado *= i;
  }
  }

  console.log(`\nO fatorial desse número é: ${resultado}`)
}

calculaFatorial();