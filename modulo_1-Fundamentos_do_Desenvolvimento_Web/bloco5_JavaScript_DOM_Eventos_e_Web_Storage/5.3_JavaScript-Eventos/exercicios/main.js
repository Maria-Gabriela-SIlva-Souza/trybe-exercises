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

// Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function daysList() {
  let ul = document.querySelector('#days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i];
    let createLi = document.createElement('li');

    if (day === 24 | day === 31) {
      createLi.className = 'day holiday';
      createLi.innerHTML = day;
      ul.appendChild(createLi);
    } else if (day === 4 | day === 11 | day === 18) {
      createLi.className = 'day friday';
      createLi.innerHTML = day;
      ul.appendChild(createLi);
    } else if (day === 25) {
      createLi.className = 'day friday holiday';
      createLi.innerHTML = day;
      ul.appendChild(createLi);
    } else {
      createLi.className = 'day';
      createLi.innerHTML = day;
      ul.appendChild(createLi);
    }
  }
}
daysList();


// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function btnHoliday(string) {
  const buttonsContainer = document.getElementsByClassName('buttons-container')[0];
  const createButton = document.createElement('button');
  createButton.innerText = string;
  createButton.id = 'btn-holiday';
  buttonsContainer.appendChild(createButton);
}
btnHoliday('Feriados')


// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function colorHoliday() {
  const holiday = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'green';

  for (i = 0; i < holiday.length; i += 1) {
    if (holiday[i].style.backgroundColor === setNewColor) {
      holiday[i].style.backgroundColor = backgroundColor;
    } else {
      holiday[i].style.backgroundColor = setNewColor;
    }
  }
}

function eventButtonHoliday() {
  const btnHoliday = document.getElementById('btn-holiday');
  btnHoliday.addEventListener('click', colorHoliday);
}
eventButtonHoliday();


// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function btnFryday(string) {
  const buttonsContainer = document.getElementsByClassName('buttons-container')[0];
  const createButton = document.createElement('button');
  createButton.innerText = string;
  createButton.id = 'btn-fryday';
  buttonsContainer.appendChild(createButton);
}

btnFryday('Sexta-feira')


// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function eventButtonFriday() {
  let btnFriday = document.querySelector('#btn-fryday');
  let fridayDays = document.getElementsByClassName('friday');
  let sextou = 'SEXTOU';

  btnFriday.addEventListener('click', function() {
    for (let i = 0; i < fridayDays.length; i += 1) {
      let dezFridays = [ 4, 11, 18, 25 ];
      if (fridayDays[i].innerHTML !== sextou) {
        fridayDays[i].innerHTML = sextou;
      } else {
        fridayDays[i].innerHTML = dezFridays[i];
      }
    }
  })
}

eventButtonFriday()


// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

function mouserOver () {
  const day = document.getElementById('days');
  day.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
}
mouserOver();

function mouseOut () {
  const day = document.getElementById('days');

  day.addEventListener('mouseout', (event) => {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
}
mouseOut();


// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function addTasks() {
  const btnAdd = document.getElementById('btn-add');
  const input = document.getElementById('task-input');

  btnAdd.addEventListener('click', () => {
    const myTasks = document.getElementsByClassName('my-tasks')[0];
    const createSpan = document.createElement('span');
    createSpan.innerText = input.value;
    myTasks.appendChild(createSpan);
    input.value = '';
  })
}

addTasks();


// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function eventColorTask (color) {
    const myTasks = document.querySelector('.my-tasks');
    const createDiv = document.createElement('div');
    createDiv.className = 'task';
    createDiv.style.backgroundColor = color;
    myTasks.appendChild(createDiv);
}

eventColorTask ('orange')


// Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
function setTaskClass() {
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    let selectedTask = document.getElementsByClassName('task selected');
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();


// Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
function colorDay () {
  const day = document.getElementById('days');
  let myTasks = document.querySelector('.task');
  const orange = myTasks.style.backgroundColor;
  day.addEventListener('click', (event) => {
    if(event.target.style.color !== orange) {
      event.target.style.color = orange;
    } else {
      event.target.style.color = 'rgb(119,119,119)';
    }
  })
}
colorDay ();


// Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();