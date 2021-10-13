import './App.css';
import React from 'react';

// Crie uma lista de tarefas simples seguindo os passos abaixo:
// insira a função a seguir acima do seu App :

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

//crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App 

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

// agora, chame a função dentro do seu componente App (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando npm start .

class App extends React.Component {
  render() {
    return (
      <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
    );
  }
}

export default App;