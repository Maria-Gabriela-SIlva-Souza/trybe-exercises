// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i] // ==> A cada loop é acrescentado em sum o valor do number da vez
}

console.log(sum); //==> Se o console.lo é colocado dentro, veremos todas as somas acontecendo e não somente a soma final

