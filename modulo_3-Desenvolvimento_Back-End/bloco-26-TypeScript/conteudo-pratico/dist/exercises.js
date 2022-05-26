"use strict";
//  recebe um nome e o imprime na tela com o texto "Olá Nome"
Object.defineProperty(exports, "__esModule", { value: true });
exports.losango = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
// mostrar na tela o nome da pessoa e sua idade
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
// adição de todos os números que estão dentro de um array.
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
// calcular a área de um triângulo
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
//  calcular a área de um quadrado
function square(side) {
    return side ** 2;
}
exports.square = square;
// calcular a área de um retângulo
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
function losango(D, d) {
    return (D * d) / 2;
}
exports.losango = losango;
