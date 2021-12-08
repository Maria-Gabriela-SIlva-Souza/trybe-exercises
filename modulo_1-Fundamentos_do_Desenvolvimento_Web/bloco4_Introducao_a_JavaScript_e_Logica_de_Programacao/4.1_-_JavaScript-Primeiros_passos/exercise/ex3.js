// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 30;
const b = 45;
const c = 20;

if (a > b && a > c) {
    console.log('O maior número é: ' + a + ' (a)');
} else if (b > a && b > c) {
    console.log('O maior número é: ' + b + ' (b)');
} else if (c > a && c > b) {
    console.log('O maior número é: ' + c + ' (c)');
}