// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

let number = 10
let symbol = '*';
let inputLine = ''

for (let i = 1; i <= number; i += 1) { // A cada for adiciona uma linha com uma estrela a mais que ja tinha sido reservada por conta da impressão anterior
    inputLine = inputLine + symbol;
    console.log(inputLine)
}
