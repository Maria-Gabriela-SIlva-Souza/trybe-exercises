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
// Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"

  myPromise
    .then((sum) => [2, 3, 5, 10].map(number => sum / number))
    .catch((sum) => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));
};

fetchPromise();