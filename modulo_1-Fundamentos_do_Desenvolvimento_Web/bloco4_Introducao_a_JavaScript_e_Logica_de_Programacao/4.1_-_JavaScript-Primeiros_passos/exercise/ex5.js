// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

const angle1 = 40;
const angle2 = 40;
const angle3 = 100;

if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
    console.log('Angulo inválido');
} else if ((angle1 + angle2 + angle3) === 180) {
    console.log(true);
} else if ((angle1 + angle2 + angle3) !== 180) {
    console.log(false);
}
