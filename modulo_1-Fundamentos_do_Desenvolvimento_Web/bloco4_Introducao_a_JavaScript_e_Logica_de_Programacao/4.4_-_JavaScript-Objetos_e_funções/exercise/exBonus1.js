// 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:
// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |

// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

//COM DOIS VALORES
// function romanNumeralConversion(string) {
//   const romanNumbers = {
//     M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1,
//   }
//   let stringSplit = string.split('');

//   for (i = 0; i <= stringSplit.length; i += 1) {
//     if (romanNumbers[stringSplit[i]] < romanNumbers[stringSplit[i + 1]]) {
//       stringSplit = -1 * (romanNumbers[stringSplit[i]] - romanNumbers[stringSplit[i + 1]])
//     } else {
//       stringSplit = romanNumbers[stringSplit[i]] + romanNumbers[stringSplit[i + 1]]
//     }
//   }
//   console.log(stringSplit)  
// }

// romanNumeralConversion('MMXVIII');

const numerosRomanos = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

function romanoParaDecimal(numero) {
  numero = numero.toLowerCase();
  const len = numero.length;
  let soma = numerosRomanos[numero[len - 1]];
  let atual = numerosRomanos[numero[len - 1]];
  for (let i = 2; i <= len; i += 1) {
    const prox = numerosRomanos[numero[len - i]];
    console.log(prox);
    if (atual <= prox) {
      soma += prox;
    } else {
      soma -= prox;
    }
    atual = prox;
  }
  return soma;
}

console.log(romanoParaDecimal('MMXVIII')); // 2018