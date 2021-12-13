// Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.


// Para maior palavra

// Variável que irá armazenar a maior palavra, iniciando com a primeira palavra
let biggestWord = array[0];

// Percorrer o array
for (let i = 1; i < array.length; i += 1) {
  // Comparar se biggestWord é menor que palavra atual
  if (biggestWord.length < array[i].length) {
  // Se sim, terá a substituição
    biggestWord = array[i];
  }
}

console.log('Maior palavra:' + '' + biggestWord);


// Para menor palavra

let smallestWord = array[0];

// Percorrer o array
for (let i = 1; i < array.length; i += 1) {
  // Comparar se smallestWord é maior que palavra atual
  if (smallestWord.length > array[i].length) {
  // Se sim, terá a substituição
  smallestWord = array[i];
  }
}

console.log('Menor palavra:' + '' + smallestWord);

