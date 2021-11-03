import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
    this.handleClickAgain = this.handleClickAgain.bind(this)
    this.handleClickOneMore = this.handleClickOneMore.bind(this)
  
    this.state = {
      numHandleClick: 0,
      numHandleClickAgain: 0,
      numHandleClickOneMore: 0
    }
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numHandleClick: estadoAnterior.numHandleClick + 1
    }))
  }
  
  handleClickAgain() {
    this.setState((estadoAnterior, _props) => ({
      numHandleClickAgain: estadoAnterior.numHandleClickAgain + 1
    }))
  }
  
  handleClickOneMore() {
    this.setState((estadoAnterior, _props) => ({
      numHandleClickOneMore: estadoAnterior.numHandleClickOneMore + 1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Meu botão {this.state.numHandleClick}</button>
        <button onClick={this.handleClickAgain}>Meu outro botão {this.state.numHandleClickAgain}</button>
        <button onClick={this.handleClickOneMore}>Mais um botão {this.state.numHandleClickOneMore} </button>
      </div>
    )
  }
}

export default App;
