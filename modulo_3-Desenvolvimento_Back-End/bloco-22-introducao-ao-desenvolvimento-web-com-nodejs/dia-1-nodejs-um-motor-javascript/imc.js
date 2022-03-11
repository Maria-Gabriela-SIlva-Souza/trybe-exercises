// Exercício 1

const peso = 95;

const altura = 1.80;

const imc = () => {
  const resultImc = peso / (altura * altura);
  const text_result = `Seu IMC é de ${resultImc}`;
  return console.log(text_result);
}

imc();

module.exports = imc;