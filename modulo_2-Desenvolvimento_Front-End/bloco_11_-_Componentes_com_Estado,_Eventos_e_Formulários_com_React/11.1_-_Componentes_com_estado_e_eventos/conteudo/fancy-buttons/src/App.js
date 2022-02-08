import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      clicksbtn1: 0,
      clicksbtn2: 0,
      clicksbtn3: 0
    }

    this.btn1 = this.btn1.bind(this)
    this.btn2 = this.btn2.bind(this)
    this.btn3 = this.btn3.bind(this)
  }

  btn1() { 
    this.setState((estadoAnterior, _props) => ({
      clicksbtn1: estadoAnterior.clicksbtn1 + 1
    }))
    console.log(`Cor do botão 1: ${this.colorGreen(this.state.clicksbtn1)}`);

  } 

  btn2() { 
    this.setState((estadoAnterior, _props) => ({
      clicksbtn2: estadoAnterior.clicksbtn2 + 1
    }))
  }

  btn3() {
    this.setState((estadoAnterior, _props) => ({
      clicksbtn3: estadoAnterior.clicksbtn3 + 1
    }))
  }

  colorGreen(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }
  
  render() {
    const {clicksbtn1, clicksbtn2, clicksbtn3} = this.state;
    return (
      <div>
        <div>
          <button
            style={{backgroundColor: this.colorGreen(clicksbtn1)}}
            onClick={this.btn1}>
              Botão 1 - Quantidade de Clicks = {clicksbtn1}
          </button>
        </div>
        <div>
          <button
            style={{backgroundColor: this.colorGreen(clicksbtn2)}}
            onClick={this.btn2}>
              Botão 2 - Quantidade de Clicks = {clicksbtn2}
          </button>
        </div>
        <div>
          <button 
            style={{backgroundColor: this.colorGreen(clicksbtn3)}}
            onClick={this.btn3}>
              Botão 3 - Quantidade de Clicks = {clicksbtn3}
          </button>
        </div>
      </div>
    )
  }
}

































// import './App.css';
// import React from 'react';

// class App extends React.Component {
//   constructor() {
//     super()

//     this.handleClick = this.handleClick.bind(this)
//     this.handleClickAgain = this.handleClickAgain.bind(this)
//     this.handleClickOneMore = this.handleClickOneMore.bind(this)
  
//     this.state = {
//       numHandleClick: 0,
//       numHandleClickAgain: 0,
//       numHandleClickOneMore: 0
//     }
//   }

//   handleClick() {
//     this.setState(({numHandleClick}) => ({
//       numHandleClick: numHandleClick + 1
//     }), () => {
//       console.log(`Meu botão ${this.colorGreen(this.state.numHandleClick)}`);
//     })
//   }
  
//   handleClickAgain() {
//     this.setState(({numHandleClickAgain}) => ({
//       numHandleClickAgain: numHandleClickAgain + 1
//     }), () => {
//       console.log(`Meu outro botão ${this.colorGreen(this.state.numHandleClickAgain)}`);
//     })
//   }
  
//   handleClickOneMore() {
//     this.setState(({numHandleClickOneMore}) => ({
//       numHandleClickOneMore: numHandleClickOneMore + 1
//     }), () => {
//       console.log(`Mais um botão ${this.colorGreen(this.state.numHandleClickAgain)}`);
//     })
//   }

//   colorGreen(num) {
//     return num % 2 === 0 ? 'green' : 'white';
//   }

//   render() {
//     const {numHandleClick, numHandleClickAgain, numHandleClickOneMore} = this.state;
//     return (
//       <div>
//         <button onClick={this.handleClick} style={{backgroundColor: this.colorGreen(numHandleClick)}}>
//           {/* O  backgroundColor fica em duas {{}}, porque a primeira é para trabalhar com JavaScript, e a segunda chave é porque o react interpreta tudo como objeto*/}
//           Meu botão {this.state.numHandleClick}
//         </button>

//         <button onClick={this.handleClickAgain} style={{backgroundColor: this.colorGreen(numHandleClickAgain)}}>
//           Meu outro botão {this.state.numHandleClickAgain}
//         </button>

//         <button onClick={this.handleClickOneMore} style={{backgroundColor: this.colorGreen(numHandleClickOneMore)}}>
//           Mais um botão {this.state.numHandleClickOneMore} 
//         </button>
//       </div>
//     )
//   }
// }

// export default App;
