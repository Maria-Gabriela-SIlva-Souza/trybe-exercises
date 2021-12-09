// Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

// n = 5

// *****
// *****
// *****
// *****
// *****


let number = 10
let symbol = '*';
let inputLine = ''

for (let i = 1; i <= number; i += 1) {  // For para fazer a linha com os n asteríscos
    inputLine = inputLine + symbol;
}

for (let i = 1; i <= number; i += 1) { // For para imprimir a quantidade n de colunas
    console.log(inputLine)
}

