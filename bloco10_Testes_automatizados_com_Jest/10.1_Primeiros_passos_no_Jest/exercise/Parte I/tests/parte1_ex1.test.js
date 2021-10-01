const { it, expect } = require('@jest/globals');
const { describe } = require('yargs');
const sum = require('./parte1_ex1');


test('Teste se o retorno de sum(4, 5) é 9', () => {
  expect(sum(4,5)).toEqual(9);
});

test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
  expect(() => {sum(4, '5')}).toThrowError();
});

test('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
  expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'))
});

test('Teste se o retorno de sum(0, 0) é 0', () => {
  expect(sum(0,0)).toEqual(0);
});