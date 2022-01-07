// Crie um irmão para elementoOndeVoceEsta .
const pai = document.getElementById('pai');
const section = document.createElement('section');
section.className = 'irmao-elementoOndeVoceEsta'
pai.appendChild(section);

// Crie um filho para elementoOndeVoceEsta .
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const span = document.createElement('span');
span.className = 'filho-elementoOndeVoceEsta'
elementoOndeVoceEsta.appendChild(span);

// Crie um filho para primeiroFilhoDoFilho .
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const p = document.createElement('p');
p.className = 'filho-primeiroFilhoDoFilho'
primeiroFilhoDoFilho.appendChild(p);

// A partir desse filho criado, acesse terceiroFilho .
const filhoPrimeiroFilhoDoFilho = document.getElementsByClassName('filho-primeiroFilhoDoFilho')[0];
const terceiroFilho = filhoPrimeiroFilhoDoFilho.parentNode.parentNode.nextSibling.nextSibling;
