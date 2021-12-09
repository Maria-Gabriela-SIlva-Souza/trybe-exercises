// Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte.
// Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante.
// Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];


for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) { // Aqui é chamado index +1 por conta da condição do último item do array, enquanto for menor fazemos a multiplicação do numero index pelo numero index + 1 que seria o próximo
    newArray.push(numbers[index] * numbers[index + 1]); // E puxa para o novo array o resultado
  } else {
    newArray.push(numbers[index] * 2); // Se maior, como no caso do último, multiplica por 2
  }
}

console.log(newArray);