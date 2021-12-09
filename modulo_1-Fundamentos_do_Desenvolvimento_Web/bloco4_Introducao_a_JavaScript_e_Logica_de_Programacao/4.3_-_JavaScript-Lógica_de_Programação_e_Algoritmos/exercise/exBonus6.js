// Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let divisors = 1;   // Começamos em 1 porque todos os números são divisíveis por 1 então já temos um número além dos divisores
let numberToCheck = 30;

for (let i = 2; i <= numberToCheck; i += 1) { // Começamos em 2 porque todos os números são divisíveis por 1
  if (numberToCheck % number === 0) divisors += 1;
  // Se o numero checado for divisivel pelo i e não tiver resto, adicionamos a lista de divisores que são os números pelo qual o número checado é divisível
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
// Se o número de divisores são 2; ele é primo pois só é divisível por 1 e por ele mesmo
else console.log(numberToCheck + ' não é primo');