// Exercicio 1

const operacaoMatematica = (num1, num2, num3) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof num1 != "number" || typeof num2 != "number" || typeof num3 != "number") reject(new Error("Informe apenas números"));

    const resultado = ((num1 + num2) * num3);

    if (resultado < 50) reject(new Error("Valor muito baixo"));
    
    resolve(resultado)
  });

  return promise;
}



// Exercicio 2

const num1 = Math.floor(Math.random() * 100 + 1);
const num2 = Math.floor(Math.random() * 100 + 1);
const num3 = Math.floor(Math.random() * 100 + 1);

// operacaoMatematica(num1, num2, num3)
//   .then(result => console.log(`O resultado é: ${result}`))
//   .catch(err => console.log(`erro: ${err.message}`));

// Exercicio 3

async function main() {
  try {
    const result = await operacaoMatematica(num1, num2, 'num3');
    console.log(`O resultado é: ${result}`);
  } catch (err) {
    console.log(err);
  }
}

main();
