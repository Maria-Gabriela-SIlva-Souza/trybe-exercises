// Acesse o elemento elementoOndeVoceEsta .
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const elementoPai = elementoOndeVoceEsta.parentNode;
elementoPai.style.color = 'orange';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = 'Feito exercício 3'

// Acesse o primeiroFilho a partir de pai .
const primeiroFilho = elementoPai.firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
const atencao = elementoPai.innerText;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai .
const terceiroFilho2 = elementoPai.lastElementChild.previousElementSibling;
console.log(terceiroFilho2);
