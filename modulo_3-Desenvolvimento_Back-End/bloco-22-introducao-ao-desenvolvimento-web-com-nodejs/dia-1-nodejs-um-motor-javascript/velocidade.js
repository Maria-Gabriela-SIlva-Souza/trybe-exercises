// Exercicio 6

const readline = require('readline-sync');

const velocidadeMedia = () => {
  const distancia = readline.questionInt('Qual a distancia percorrida ? (em metros): ');
  const velocidade = readline.questionInt('Em qual velocidade foi percorrida ? (em segundos): ');
 
  console.log(`Distância: ${distancia}, Velocidade: ${velocidade}`);

  const velMediaCalc = (distancia / velocidade).toFixed(2);

  console.log(`Velocidade Média: ${velMediaCalc} metros por segundo`);
}

velocidadeMedia();