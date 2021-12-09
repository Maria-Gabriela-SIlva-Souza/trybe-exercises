// Tente entender o que está acontencedo no código abaixo:

// Supondo o array [5   3   7   4]

for (let index = 1; index < array.length; index += 1) { // 3
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) { // 5
        if (array[index] < array[secondIndex]) {
            // Se 3 for menor que 5
            let position = array[index];
            // position adiciona o número 3
            array[index] = array[secondIndex];
            // dentro do array com 3, adiciona o 5
            array[secondIndex] = position;
            // o array com 3 e 5 é enviado para position
        }
    }
}
