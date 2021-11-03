import './App.css';
import React from 'react';

function handleClick() {
  console.log('Clicou no primeiro botão!')
}

function handleClickAgain() {
  console.log('Clicou no segundo botão!')
}

function handleClickOneMore() {
  console.log('Clicou no terceiro botão!')
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={handleClick}>Meu botão</button>
        <button onClick={handleClickAgain}>Meu outro botão</button>
        <button onClick={handleClickOneMore}>Mais um botão</button>
      </div>
    )
  }
}

export default App;
