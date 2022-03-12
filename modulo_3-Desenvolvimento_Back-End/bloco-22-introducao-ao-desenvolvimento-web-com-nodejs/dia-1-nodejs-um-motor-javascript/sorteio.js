// Exercicio 7

const readline = require('readline-sync');

const  numeroSorteado = () => {
  min = Math.ceil(1);
  max = Math.floor(10);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const jogarNovamente = () => {
  const continuar = readline.keyInYN('\n\n\nQuer joga novamente ?: ');

  if(continuar === true) adivinhacao()
  else console.log('\n\nAté a próxima !!!')
}

const adivinhacao = () => {
  const numero_escolhido = readline.questionInt('Vamos brincar de adivinhação ? \n\nDigite um número entre 0 e 10: ');
  const numero_sorteado = numeroSorteado();
  
  if(numero_escolhido != numero_sorteado) console.log(`\n\n\nOpa, não foi dessa vez. O número sorteado era ${numero_sorteado}`)
  else console.log('Parabéns, número correto!')

  jogarNovamente();
}

adivinhacao();