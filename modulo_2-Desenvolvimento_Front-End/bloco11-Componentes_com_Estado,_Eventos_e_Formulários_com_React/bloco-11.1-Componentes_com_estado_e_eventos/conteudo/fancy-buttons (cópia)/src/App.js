// Defina uma lógica que estabeleça que, quando o número de cliques no botão for par, ele deve ser verde.

import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };

    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
  }

  // A cor atual do botão deve ser impressa num console.log() de dentro da função do evento que lida com o clique. Faça isso acontecer!
  handleButtonOne() {
    this.setState(({ clicksBtnOne }) => ({
      clicksBtnOne: clicksBtnOne + 1,
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(this.state.clicksBtnOne)}`);
    });
  }
  
  handleButtonTwo() {
    this.setState(({ clicksBtnTwo }) => ({
      clicksBtnTwo: clicksBtnTwo + 1,
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(this.state.clicksBtnTwo)}`);
    });
  }
  
  handleButtonThree() {
    this.setState(({ clicksBtnThree }) => ({
      clicksBtnThree: clicksBtnThree + 1,
    }), () => {
      // Aqui imprimimos a cor no console após o setState atualizar
      // a quantidade de clicks no botão
      console.log(`Botão 3 ${this.getButtonColor(this.state.clicksBtnThree)}`);
    });
  }


  // Para essa função, não precisamos utilizar o bind porque ela é utilizada
  // apenas dentro do contexto do componente App
  getButtonColor(num) {
    // Essa função contém um ternário que realiza a lógica para mudarmos
    // a cor do botão para verde quando for um número par
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
    return (
      <div>
        <button
          onClick={ this.handleButtonOne }
          // Para renderizarmos as cores, precisamos acrescentar a função
          // que contém a nossa lógica ao "inline style", passando o estado
          // correspondente como parâmetro
          style={{ backgroundColor: this.getButtonColor(clicksBtnOne) }}
        >
          Botão 1 | Count = { clicksBtnOne }
        </button>
        <button
          onClick={ this.handleButtonTwo }
          style={{ backgroundColor: this.getButtonColor(clicksBtnTwo) }}
        >
          Botão 2 | Count = { clicksBtnTwo }
        </button>
        <button
          onClick={ this.handleButtonThree }
          style={{ backgroundColor: this.getButtonColor(clicksBtnThree) }}
        >
          Botão 3 | Count = { clicksBtnThree }
        </button>
      </div>
    );
  }
}

export default App;