const { it, expect } = require('@jest/globals')
const { describe } = require('yargs')
const myRemove = require('./parte1_ex2')

// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

// describe('A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
//   it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
//     expect([1, 2, 4]).toBe(myRemove([1, 2, 3, 4], 3))
//   })
// })
test('A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
  expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
});

test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

test('Verifique se o array passado por parâmetro não sofreu alterações', () => {
  const myList = [5, 6, 7, 8];
  expect(myRemove(myList, 5)).not.toEqual([myList]);
});

test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
  expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
});