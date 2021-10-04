const fetchPromise = () => {
  // Primeiramente, instancie uma Promise
  const myPromise = new Promise((resolve, reject) => {
    // Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
    const myArray = Array.from({length: 10},
      () => Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray.map(number => number * number)
      .reduce((sum, number) => sum + number);
      // console.log(sum);
    // Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. 
    (sum < 8000) ? resolve(): reject();
  });
  // Acresça um then , com um console.log('Promise resolvida') e um catch , com um console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado.
  myPromise
    .then(() => console.log('Promise resolvida'))
    .catch(() => console.log('Promise rejeitada'));
};

fetchPromise();