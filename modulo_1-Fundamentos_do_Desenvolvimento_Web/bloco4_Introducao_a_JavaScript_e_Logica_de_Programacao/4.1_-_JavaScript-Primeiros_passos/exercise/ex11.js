// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

const grossSalary = 3000;
let netSalary;
let discountINSS;
let discountIR;
let aliquot;
let IRValue;

if (grossSalary < 1556.94) {
  discountINSS = grossSalary / 100 * 8;
} else if (grossSalary > 1556.95 && grossSalary < 2594.92) {
  discountINSS = grossSalary / 100 * 9;
} else if (grossSalary > 2594.93 && grossSalary < 5189,82) {
  discountINSS = grossSalary / 100 * 11;
} else {
  discountINSS = 570.88;
}

const baseSalary = grossSalary - discountINSS;

if (baseSalary < 1903.98) {
  discountIR = 0;
  IRValue = baseSalary;
} else if (baseSalary > 1903.99 && baseSalary < 2826.65) {
  discountIR = 142.8;
  aliquot = 7.5;
  IRValue = (baseSalary / 100 * 7.5) - discountIR;
} else if (baseSalary > 2826.66 && baseSalary < 3751.05) {
  discountIR = 354.8;
  aliquot = 15;
  IRValue = (baseSalary / 100 * 15) - discountIR;
} else if (baseSalary > 3751.06 && baseSalary < 4664.68) {
  discountIR = 636.13;
  aliquot = 22.5;
  IRValue = (baseSalary / 100 * 22.5) - discountIR;
} else {
  discountIR = 869.36;
  aliquot = 27.5;
  IRValue = (baseSalary / 100 * 27.5) - discountIR;
}

netSalary = baseSalary - IRValue;

console.log(`Com o salário bruto de R$ ${grossSalary}, seu salário líquido, após descontos fica no valor de R$ ${netSalary}`);


