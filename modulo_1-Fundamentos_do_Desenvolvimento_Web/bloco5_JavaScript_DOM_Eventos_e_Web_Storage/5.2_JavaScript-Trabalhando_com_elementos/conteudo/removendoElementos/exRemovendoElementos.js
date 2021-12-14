// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
const pai = document.getElementById('pai');
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

pai.removeChild(document.getElementById('primeiroFilho'));
pai.removeChild(document.getElementById('terceiroFilho'));
pai.removeChild(document.getElementById('quartoEUltimoFilho'));
elementoOndeVoceEsta.removeChild(document.getElementById('segundoEUltimoFilhoDoFilho'));