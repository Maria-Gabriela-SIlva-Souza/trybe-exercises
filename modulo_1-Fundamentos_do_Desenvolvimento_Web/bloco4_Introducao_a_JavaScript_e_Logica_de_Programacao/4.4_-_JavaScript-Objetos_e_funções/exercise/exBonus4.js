// Usando o objeto abaixo, faça os exercícios a seguir:

let moradores = {
  blocoUm: [
    {
      nome: 'Luiza', sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

// 4 - Acesse as chaves nome , sobrenome , andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".

const { nome, sobrenome, andar, apartamento } = moradores.blocoDois[1];
console.log(`Exercício 4`)
console.log(`O morador do bloco 2 de nome ${nome} ${sobrenome} mora no ${andar}° andar, apartamento ${apartamento}`)
console.log(' ')


// 5 - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome , depois faça o mesmo para os moradores do bloco 2.

console.log(`Exercício 5.1`)
const bloco1 = moradores.blocoUm;
for (let i = 0; i < bloco1.length; i += 1) { 
  const name = bloco1[i]
  for (let i2 = 1; i2 < bloco1.length; i2 += 1) {
    console.log(`${name.nome} ${name.sobrenome}`)
  }
}
console.log(' ')


console.log(`Exercício 5.2`)
const bloco2 = moradores.blocoDois;
for (let i = 0; i < bloco2.length; i += 1) { 
  const name = bloco2[i]
  for (let i2 = 1; i2 < bloco2.length; i2 += 1) {
    console.log(`${name.nome} ${name.sobrenome}`)
  }
}
console.log(' ')

