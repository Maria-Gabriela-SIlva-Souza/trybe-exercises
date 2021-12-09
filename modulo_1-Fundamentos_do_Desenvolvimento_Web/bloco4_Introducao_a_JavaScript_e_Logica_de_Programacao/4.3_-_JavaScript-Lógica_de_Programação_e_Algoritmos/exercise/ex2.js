// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'gabriela';

// Adicionar uma variável para a inversão
let reverseWord = '';

// Percorrer toda a string
for (let i = word.length - 1; i >=0; i-= 1) {
// Pegar esse primeiro valor e iterá-lo na variável
    reverseWord += word[i]
}

console.log(reverseWord);

//Solução 2
// let word = 'tryber';
// let reverseWord = '';

// reverseWord = word.split('').reverse().join('');

// console.log(reverseWord);
