// Depois, faça uma pirâmide com n asteriscos de base:

// n = 5

//   *
//  ***
// *****


let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) { // Laço das linhas
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) { // Laço das colunas
    if (columnIndex > controlLeft && columnIndex < controlRight) { // Se o valor da coluna for maior que o valor que define o centro da piramide a esquerda, e o valor da coluna for menor que o valor que define o centro da piramide a direita, ou seja,se o valor estiver entre esses dois valores;
      inputLine = inputLine + symbol; // Coloca-se o símbolo
    } else {
      inputLine = inputLine + ' ';  // Senão coloca-se o espaço
    }
  }
  console.log(inputLine);
  inputLine = ''; // Após imprimir precisamos limpar o input para um novo loop
  controlRight += 1; // Aumentar para a direita o calor central (pois há o aumento da numeração do index)
  controlLeft -= 1  // Decrementar para a esquerda o calor central (pois há o decremento da numeração do index)
};