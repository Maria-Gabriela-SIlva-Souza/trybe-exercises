const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*1. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?*/
function adicionaClasseTech (event) {
  const classeTech = document.querySelector ('.tech');
  classeTech.classList.remove ('tech');
  event.target.classList.add('tech');
  

}
firstLi.addEventListener('click', adicionaClasseTech);
secondLi.addEventListener('click', adicionaClasseTech);
thirdLi.addEventListener('click', adicionaClasseTech);

/*A seção acima atribui uma função ao evento de clique nas nossas Li's. Essa função, primeiramente recebe o "event" como parâmetro, que é um objeto que contém informações sobre o evento que foi disparado no momento. Dentro dele existe a chave "target", que é uma referência ao elemento que deu início ao evento.
Na primeira linha dentro da função, atribuimos o elemento com a classe "tech" à uma variável e na linha seguinte, removemos essa classe do elemento. E após isso, atribuimos essa classe ao "event.target", que é a propriedade que discutimos no parágrafo anterior. Por fim, limpamos nosso input, inserindo uma string vazia em seu campo de texto.
Resumindo, tiramos a classe "tech" da Div que possuir ela, inserimos essa mesma classe na Li em que a gente clicou e aí limpamos nosso input.
Isso funciona como se estivéssemos selecionando a Li em que queremos escrever o título da música.*/


/*2. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';*/

input.addEventListener ('input', function(event) { //Cria evento no input, com o parametro input e uma função anônima
  const classeTech = document.querySelector('.tech'); // declara constante que contenha classe tech
  classeTech.innerText = event.target.value; //no elemento da classe tech, atribui no evento próprio o valor inserido na mesma
});

/*3. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?*/
myWebpage.addEventListener ('dblclick', function () {
  window.location.replace('https://blog.betrybe.com/'); // a ação disparada é pegar a URL atual com window.location e substituir por outro link usando .replace('https://blog.betrybe.com/') .
});

