const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from({
        length: 10
      },
      () => Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray.map(number => number * number)
      .reduce((sum, number) => sum + number);

    (sum < 8000) ? resolve(): reject();
  });
  // Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.

  myPromise
    .then((sum) => [2, 3, 5, 10].map(number => sum / number))
    .catch(() => console.log('Promise rejeitada'));
};

fetchPromise();