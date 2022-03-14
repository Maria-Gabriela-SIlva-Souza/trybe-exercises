const operacaoMatematica = (num1, num2, num3) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof num1 != "number" || typeof num2 != "number" || typeof num3 != "number") reject(new Error("Informe apenas números"));

    const resultado = ((num1 + num2) * num3);

    if (resultado < 50) reject(new Error("Valor muito baixo"));
    
    resolve(resultado)
  });

  return promise;
}

operacaoMatematica(60, 1, 1)
  .then(result => console.log(`O resultado é: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));