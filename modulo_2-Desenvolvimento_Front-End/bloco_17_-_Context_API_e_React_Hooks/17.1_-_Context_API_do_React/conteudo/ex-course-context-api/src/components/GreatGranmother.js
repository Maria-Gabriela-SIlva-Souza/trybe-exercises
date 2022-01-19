import React, { Component } from 'react';
import Grandmother from './Grandmother';
// PASSO 4 - Colocar o Provider no logal que vai prover as infos (no componente mãe)
// Para isso, é necessário importar o context
import MyContext from './MyContext';

export default class GreatGranmother extends Component {
  constructor(props) {
    super(props);

    this.state = {
      money: 10000000
    }
  }

  handleSpendMoney = () => {
    this.setState((prevState) => ({ money: prevState.money - 100 }))
  }

  render() {
    // 4.2 - Precisamos passar o valor das informações para o Provider, e ele será passado como objeto dentro de uma constante
    const contextValue = {
      money: this.state.money,
      handleSpendMoney: this.handleSpendMoney
    }

    return (
      // 4.1 - O Provider vai dentro da renderização do componente que provém a informação
      // 4.3 - Agora todos os componentes filhos tem acesso ao estado central da aplicação
      <MyContext.Provider value={ contextValue }>
        <div>
          <h1>Eu sou a bisavó</h1>
          <Grandmother />
        </div>
      </MyContext.Provider>
    );
  }
}
