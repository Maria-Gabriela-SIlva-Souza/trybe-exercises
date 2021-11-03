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
    this.setState(({numHandleClick}) => ({
      numHandleClick: numHandleClick + 1
    }), () => {
      console.log(`Meu botão ${this.colorGreen(this.state.numHandleClick)}`);
    })
  }
  
  handleClickAgain() {
    this.setState(({numHandleClickAgain}) => ({
      numHandleClickAgain: numHandleClickAgain + 1
    }), () => {
      console.log(`Meu outro botão ${this.colorGreen(this.state.numHandleClickAgain)}`);
    })
  }
  
  handleClickOneMore() {
    this.setState(({numHandleClickOneMore}) => ({
      numHandleClickOneMore: numHandleClickOneMore + 1
    }), () => {
      console.log(`Mais um botão ${this.colorGreen(this.state.numHandleClickAgain)}`);
    })
  }

  colorGreen(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const {numHandleClick, numHandleClickAgain, numHandleClickOneMore} = this.state;
    return (
      <div>
        <button onClick={this.handleClick} style={{backgroundColor: this.colorGreen(numHandleClick)}}>
          Meu botão {this.state.numHandleClick}
        </button>

        <button onClick={this.handleClickAgain} style={{backgroundColor: this.colorGreen(numHandleClickAgain)}}>
          Meu outro botão {this.state.numHandleClickAgain}
        </button>

        <button onClick={this.handleClickOneMore} style={{backgroundColor: this.colorGreen(numHandleClickOneMore)}}>
          Mais um botão {this.state.numHandleClickOneMore} 
        </button>
      </div>
    )
  }
}

export default App;
