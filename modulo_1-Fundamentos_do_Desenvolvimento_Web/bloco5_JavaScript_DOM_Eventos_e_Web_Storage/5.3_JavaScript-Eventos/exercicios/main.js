function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

/*
Exercício 1:
  - O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. - - - - - Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
  - Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
  - Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
  - Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
*/
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function dayMonth() {
  let ul = document.getElementById('days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let daysList = dezDaysList[index];
    let li = document.createElement('li');

    if (daysList === 24 | daysList === 31) {
      li.innerHTML = daysList;
      li.className = 'day holiday';
      ul.appendChild(li);
    } else if (daysList === 4 | daysList === 11 | daysList === 18) {
      li.innerHTML = daysList;
      li.className = 'day friday';
      ul.appendChild(li);
    } else if (daysList === 25) {
      li.innerHTML = daysList;
      li.className = 'day holiday friday';
      ul.appendChild(li);
    } else {
      li.innerHTML = daysList;
      li.className = 'day';
      ul.appendChild(li);
    }
  };
};

dayMonth();

/*
Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
function stringHolliday(receiveString) {
  let buttonContainer = document.querySelector('.buttons-container');
  let createButton = document.createElement('button');
  createButton.id = 'btn-holiday';
  createButton.innerHTML = receiveString;
  buttonContainer.appendChild(createButton);
}
stringHolliday('Feriados');

/*
Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
*/
function changeColor() {
  let btnHolliday = document.getElementById('btn-holiday');
  let newColor = 'green';
  let classHolliday = document.getElementsByClassName('holiday');
  let originColor = 'rgb(238,238,238)';

  btnHolliday.addEventListener('click', function () {
    for (let index = 0; index < classHolliday.length; index += 1) {
      if (classHolliday[index].style.backgroundColor === newColor) {
        classHolliday[index].style.backgroundColor = originColor;
      } else {
        classHolliday[index].style.backgroundColor = newColor;
      }
    }
  })
};

changeColor();

/*
  Exercício 4:
  Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
  Adicione a este botão o ID "btn-friday" .
  Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
function stringFryday(string) {
  let buttonContainer = document.querySelector('.buttons-container');
  let createButton = document.createElement('button');
  createButton.id = 'btn-friday';
  createButton.innerHTML = string;
  buttonContainer.appendChild(createButton);
}
stringFryday('Sexta-feira');


/*
Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/
let daysFridays = [4, 11, 18, 25];

function changeText(dezFridays) {
  let buttonFriday = document.getElementById('btn-friday');
  let fryday = document.getElementsByClassName('friday');
  let sextou = 'Sextou';

  buttonFriday.addEventListener('click', function () {
    for (index = 0; index < fryday.length; index += 1) {
      if (fryday[index].innerHTML !== sextou) {
        fryday[index].innerHTML = sextou;
      } else {
        fryday[index].innerHTML = daysFridays[index];
      }
    }
  })
}

changeText(daysFridays);

/*
6. Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
Dica - Propriedade: event.target .
*/
function mouseover() {
  let dayMonth = document.getElementById('days');

  days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '50px';
    event.target.style.fontWeight = '500';
  })
}

function mouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function (event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

mouseover();
mouseOut();

/*
Exercício 7:
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/
function assignment(tarefa) {
  let myTastks = document.querySelector('.my-tasks');
  let span = document.createElement('span');
  span.innerText = tarefa;
  myTastks.appendChild(span);
}

assignment('Pŕoximo Projeto');



/*
Exercício 8:
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/
function legend(color) {
  let myTasks = document.querySelector('.my-tasks');
  let div = document.createElement('div');
  div.className = 'task';
  div.style.backgroundColor = color;
  myTasks.appendChild(div);
}

legend('orange');
/*
Exercício 9:
Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
*/
function eventAdd() {
  let task = document.querySelector('.task');
  task.addEventListener('click', function selected() {
    if (task.className === 'task') {
      task.className = 'task selected';
    } else {
      task.className = 'task';
    }
  })
}

eventAdd();
/*
Exercício 10:
Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
*/

/*
Bônus:
Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
Ao pressionar a tecla "enter" o evento também deverá ser disparado.
Dica - Propriedade: keyCode .
*/