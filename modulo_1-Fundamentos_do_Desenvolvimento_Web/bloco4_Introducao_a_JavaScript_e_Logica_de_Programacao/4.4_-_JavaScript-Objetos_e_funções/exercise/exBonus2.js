// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function arrayOfNumbers(vector) {
  let arrayResult = [];
  for (i = 0; i < vector.length; i += 1) {
    const numbers = vector[i];
    for (i2 = 0; i2 < numbers.length; i2 += 1) {
      if (numbers[i2] % 2 === 0) {
        arrayResult.push(numbers[i2])
      }
    }
  }
  console.log (arrayResult)
}

arrayOfNumbers(vector);