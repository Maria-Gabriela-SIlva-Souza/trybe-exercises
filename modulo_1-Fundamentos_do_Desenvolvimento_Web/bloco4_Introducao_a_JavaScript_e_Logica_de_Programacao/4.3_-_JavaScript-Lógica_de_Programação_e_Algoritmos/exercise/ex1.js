// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// 1. Criar uma variável com o valor inicial 1;
let fatorial = 1;
// 2. Realizar um laço for;
// 3. Index começando em 2; Continuar enquanto valor menor ou igual a 10; acrescenta 1 a 1;
for (let i = 2; i <= 10; i+= 1) {
    // 4. Pegar a constante e acrescentar a multiplicação;
    fatorial = fatorial * i;
}
// 5. Imprimir o resultado;
console.log(fatorial);
