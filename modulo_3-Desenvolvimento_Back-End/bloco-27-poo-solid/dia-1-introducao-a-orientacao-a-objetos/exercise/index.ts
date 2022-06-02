import Pessoa from './Pessoa';
import Estudante from './Estudantes';
import Data from './Data';
import { Cliente, ItemPedido, Pedido } from './Lanchonete';
import Disciplina from './Funcionario';

//27.1 ==> Data testes
const testDate = new Data(29, 1, 1989);

console.log(testDate);
console.log('Dia: ', testDate.dia);
console.log('Mês: ', testDate.mes);
console.log('Mês por extenso: ', testDate.getMonthName());
console.log('Ano: ', testDate.ano);
console.log('É ano bissexto: ', testDate.isLeapYear() ? 'Sim' : 'Não');
console.log(testDate.format('dd/mm/aaaa'));
console.log(testDate.format('dd-mm-aaaa'));
console.log(testDate.format('aaaa/mm/dd'));
console.log(testDate.format('aaaa-mm-dd'));
console.log(testDate.format('dd de M de aa'));
console.log(testDate.format('dd, M de aaaa'));

const otherDate = new Data(30, 1, 2021);
const compared = testDate.compare(otherDate);
const compareStates = ['anterior', 'igual', 'posterior'];

console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);

const invalidDate = new Data(31, 2, 2021); // data inválida

console.log('Teste data inválida: ', invalidDate);
console.log(invalidDate.format('a m d')); // formato inválido


// 27.1 ==> Estudantes testes
// const estdante1 = new Estudante('1a2a3a', 'Maria', [4, 5, 6, 7], [10, 10])
// const estdante2 = new Estudante('1a2a3a4a', 'João', [4, 7, 7, 7], [6, 6])

// console.log(estdante1)
// console.log(estdante2)

// console.log(`A soma das notas de ${estdante1.nome} é: ${estdante1.somaNotas()}`)
// console.log(`A média das notas de ${estdante1.nome} é: ${estdante1.mediaNotas()}`)


//27.1 ==> Lanchonete teste
const cliente = new Cliente('João');

const sandwiche = new ItemPedido('Sandwiche Natural', 5.00);
const juice = new ItemPedido('Suco de Abacaxí', 5.00);
const dessert = new ItemPedido('Gelatina de Uva', 2.50);

const order = new Pedido(cliente, [sandwiche, juice, dessert], 'dinheiro', 0.10);

console.log(order);

//////////////////////////////////////////////////////////////////////////////////////////////////

//27.2 ==> Ex1
const maria = new Pessoa('Maria da Consolação', new Date('1980/01/25'));
const luiza = new Pessoa('Luiza Andrade', new Date('2005/10/02'));

console.log(maria);
console.log(luiza);


//27.2 ==> Ex2
const carolina = new Estudante('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Estudante('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Estudante('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Estudante('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Estudante('Fernando Gonçalves', new Date('2006/09/11'));

carolina.notaProva = [25, 20, 25, 23];
lucas.notaProva = [25, 20, 25, 23];
jessica.notaTrabalho = [50, 45];
tamires.notaTrabalho = [47, 42];

console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);

//27.2 ==> Ex3
const matematica = new Disciplina('Matematica');
const historia = new Disciplina('História');
const filosofia = new Disciplina('Filosofia');

console.log(matematica);