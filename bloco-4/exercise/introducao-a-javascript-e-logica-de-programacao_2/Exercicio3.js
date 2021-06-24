let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = numbers.reduce((acumulado, atual) => acumulado + atual, 0);

console.log (soma / numbers.length);