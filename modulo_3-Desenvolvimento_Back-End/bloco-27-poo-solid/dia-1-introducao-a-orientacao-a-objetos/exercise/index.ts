import Pessoa from './Pessoa';
import Estudante from './Estudantes';

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