import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
    this.handleClickAgain = this.handleClickAgain.bind(this)
    this.handleClickOneMore = this.handleClickOneMore.bind(this)
  }

  handleClick() {
    console.log('Clicou no primeiro botão!')
  }
  
  handleClickAgain() {
    console.log('Clicou no segundo botão!')
  }
  
  handleClickOneMore() {
    console.log('Clicou no terceiro botão!')
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Meu botão</button>
        <button onClick={this.handleClickAgain}>Meu outro botão</button>
        <button onClick={this.handleClickOneMore}>Mais um botão</button>
      </div>
    )
  }
}

export default App;
