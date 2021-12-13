// Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.

// 1. Faça cinco programas, um para cada operação aritmética básica. 
// Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
function arithmeticOperations(a, b) {
  // Adição (a + b)
  console.log('Soma: ' + (a + b));

  // Subtração (a - b)
  console.log('Subtração: ' + (a - b));

  // Multiplicação (a * b)
  console.log('Multiplicação: ' + (a * b));

  // Divisão (a / b)
  console.log('Divisão: ' + (a / b));

  // Módulo (a % b)
  console.log('Módulo: ' + (a % b));
}

console.log('Função do exercício 1:')
arithmeticOperations(1, 2)
console.log(' ')


// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
function greaterNumber(a, b) {
  if (a > b) {
    console.log("'a' é maior que 'b'");
  } else {
    console.log("'b' é maior que 'a'");
  }
}

console.log('Função do exercício 2:')
greaterNumber(10, 15)
console.log(' ')


// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
function greaterThanThreeNumber(a, b, c) {
  if (a > b && a > c) {
    console.log('O maior número é: ' + a + ' (a)');
  } else if (b > a && b > c) {
    console.log('O maior número é: ' + b + ' (b)');
  } else if (c > a && c > b) {
    console.log('O maior número é: ' + c + ' (c)');
  }
}

console.log('Função do exercício 3:')
greaterThanThreeNumber(30, 45, 20)
console.log(' ')


// 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
function positiveOrNegative(number) {
  if (number > 0) {
    console.log('positive');
  } else if (number < 0) {
    console.log('negative');
  } else {
    console.log('zero');
  }
}


console.log('Função do exercício 4:')
positiveOrNegative(-3)
console.log(' ')


// 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.
function triangle(angle1, angle2, angle3) {
  if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
    console.log('Angulo inválido');
  } else if ((angle1 + angle2 + angle3) === 180) {
    console.log(true);
  } else if ((angle1 + angle2 + angle3) !== 180) {
    console.log(false);
  }
}

console.log('Função do exercício 5:')
triangle(40, 40, 100)
console.log(' ')


