let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = numbers.reduce((acumulado, atual) => acumulado + atual, 0);

let resultado = soma / numbers.length;

if (resultado > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor que 20');
}
