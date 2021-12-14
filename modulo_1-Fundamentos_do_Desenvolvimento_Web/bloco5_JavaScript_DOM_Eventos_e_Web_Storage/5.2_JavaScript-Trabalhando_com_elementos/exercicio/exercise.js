// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const body = document.getElementsByTagName('body')[0];
const createH1 = document.createElement('h1');
createH1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(createH1);

// 2. Adicione a tag main com a classe main-content como filho da tag body ;
const createMain = document.createElement('main');
createMain.className = 'main-content';
body.appendChild(createMain);

// 3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const main = document.getElementsByClassName('main-content')[0];
const createSectionCenter = document.createElement('section');
createSectionCenter.className = 'center-content';
main.appendChild(createSectionCenter);

// 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const section = document.getElementsByClassName('center-content')[0];
const createP = document.createElement('p');
createP.className = 'description';
createP.innerText = 'Realizando bruscas e adições de elementos HTML';
section.appendChild(createP);

// 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const createSectionLeft = document.createElement('section');
createSectionLeft.className = 'left-content';
main.appendChild(createSectionLeft);

// 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const createSectionRight = document.createElement('section');
createSectionRight.className = 'right-content';
main.appendChild(createSectionRight);

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
const sectionLeft = document.getElementsByClassName('left-content')[0];
const createImage = document.createElement('img');
createImage.src = 'https://picsum.photos/200';
createImage.className = 'small-image';
sectionLeft.appendChild(createImage);

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const sectionRight = document.getElementsByClassName('right-content')[0];
const createUl = document.createElement('ul');
sectionRight.appendChild(createUl);
const ul = document.getElementsByTagName('ul')[0];

for (i = 1; i <= 10; i += 1) {
    const createLi = document.createElement('li');
    createLi.innerHTML = i;
    ul.appendChild(createLi);
}

// 9. Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
// 11. Adicione a classe description nas 3 tags h3 criadas;

for (i = 1; i <= 3; i += 1) {
    const createH3 = document.createElement('h3');
    createH3.className = 'description';
    main.appendChild(createH3);
}


// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// 10. Adicione a classe title na tag h1 criada;
createH1.className = 'title';

// 12. Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
main.removeChild(sectionLeft);

// 13. Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
sectionRight.style.marginRight='auto';

// 14. Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
main.style.backgroundColor = 'green';

// 15. Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
ul.lastChild.remove();
ul.lastChild.remove();