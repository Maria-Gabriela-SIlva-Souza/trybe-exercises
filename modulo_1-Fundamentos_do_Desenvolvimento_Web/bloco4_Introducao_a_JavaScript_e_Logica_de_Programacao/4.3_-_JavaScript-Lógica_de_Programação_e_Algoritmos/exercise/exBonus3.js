// Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****

let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) { // Laço das linhas
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) { // Laço das colunas
    if (columnIndex < inputPosition) {  // Se o valor da coluna for menor que o valor designado n
      inputLine = inputLine + ' ';  // Será colocado um espaço dentro de inputLine
    } else {
      inputLine = inputLine + symbol; // Quando for igual oi maior, colocará a string
    }
  }
  console.log(inputLine);
  inputLine = ''; // Zero essa variável para que na próxima repetição eu possa utilizá-la novamente
  inputPosition -= 1; // Decremento 1 na posição para que ela comece a diminuir os espaços e aumentar os asterísticos;
};

