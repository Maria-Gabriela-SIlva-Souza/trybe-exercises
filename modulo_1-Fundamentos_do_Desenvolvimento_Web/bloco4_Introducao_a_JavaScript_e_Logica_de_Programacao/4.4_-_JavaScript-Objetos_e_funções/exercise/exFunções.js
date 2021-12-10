// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false
function verificaPalindrome(string) {
  let reverseString = '';

  //Podemos fazer dessa maneira
  reverseString = string.split('').reverse().join('');
  if (string === reverseString) {
    console.log(`A palavra ${string} é um palíndromo`)
  } else {
    console.log(`A palavra ${string} não é um palíndromo`)
  }

  // Ou com o laço for
  // for (let i = string.length - 1; i >= 0; i -= 1) {
  //   reverseString += string[i]
  // }
  // if (string === reverseString) {
  //   return true
  // } else {
  //   return false
  // }
}

console.log('Exercicio 1:')
verificaPalindrome('arara')
console.log(' ')


// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .
function highestIndex(array) {
  let indiceMaior = 0;
  for (let indice in array) {
    if (array[indiceMaior] < array[indice]) {
      indiceMaior = indice;
    }
  }
  console.log('O maior valor do array está no índice' + ' ' + indiceMaior);
}

console.log('Exercicio 2:')
highestIndex([2, 3, 6, 7, 10, 1])
console.log(' ')


// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .
function lowestIndex(array) {
  let indiceMenor = 0;
  for (let indice in array) {
    if (array[indiceMenor] > array[indice]) {
      indiceMenor = indice;
    }
  }
  console.log('O menor valor do array está no índice' + ' ' + indiceMenor);
}

console.log('Exercicio 3:')
lowestIndex([2, 4, 6, 7, 10, 0, -3])
console.log(' ')


// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .
function biggestName(array) {
  let maiorPalavra = array[0];
  for (let indice in array) {
    if (maiorPalavra.length < array[indice].length) {
      maiorPalavra = array[indice];
    }
  }
  console.log('A maior palavra do array é' + ' ' + maiorPalavra)
}

console.log('Exercicio 4:')
biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])
console.log(' ')


// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .
function repeatedIntegers(numeros) {
  let num = {};

  for (let index = 0; index < numeros.length; index += 1) {
    let valor = numeros[index];
    if (num[valor] === undefined) {
      num[valor] = 1;
    } else {
      num[valor] = num[valor] + 1;
    }
  }

  let contRepetido = 0;
  let contNumero = 0;

  for (let prop in num) {
    if (contRepetido < num[prop]) {
      contRepetido = num[prop];
      contNumero = prop;
    }
  }

  console.log('O inteiro que mais se repete é o' + ' ' + contNumero );
}

console.log('Exercicio 5:')
repeatedIntegers([2, 3, 2, 5, 8, 2, 3])
console.log(' ')


// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
function summation(number) {
  let sum = 0;
  for (let i = 1; i <= number; i += 1) {
    sum = sum + i;
  }
  console.log(`A soma dos números de 1 até ${number} é igual a ${sum}`)
}

console.log('Exercicio 6:')
summation(5)
console.log(' ')


// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaending('trybe', 'be') ;
// Retorno esperado: true
// verificaending('joaofernando', 'fernan') ;
// Retorno esperado: false
function checkString(word, ending) {
  word = word.split('');
  ending = ending.split('');
  control = true;
  for (let index = 0; index < ending.length; index += 1) {
    if (word[word.length - ending.length + index] != ending[index]) {
      control = false;
    }
  }
  if (control) {
    console.log(`${ending.join('')} é o final de ${word.join('')}`)
  } else {
    console.log(`${ending.join('')} não é o final de ${word.join('')}`)
  }
}

console.log('Exercicio 7:')
checkString('trybe', 'be')
console.log(' ')