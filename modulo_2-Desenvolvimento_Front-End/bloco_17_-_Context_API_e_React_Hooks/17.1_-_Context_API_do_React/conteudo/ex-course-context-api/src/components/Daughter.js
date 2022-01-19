import React, { Component } from 'react';
// Passo 5 - inserir o consumer dentro do componente filho que você queira consumir
// 5.1 - Importar o MyContext
import MyContext from './MyContext';

export default class Daughter extends Component {
  render() {
    return (
      <div>
        <h4>Eu sou a filha</h4>
        {/* 5.2 - Inserir o consumer na renderização (dentro da div principal) */}
        <MyContext.Consumer>
          {/* O Consumer recebe uma função, que tem como parâmetro o valor do Provedor */}
          {/* Nessa função devemos encapsular todos os valores que queremos que consuma o estado da aplicação, chamando ele por value.{nome da chave do objeto enviado} */}
          {
            value => (
              <div>
                <p>{`Eu tenho ${value.money} pra gastar`}</p>
                <button onClick={value.handleSpendMoney}>Gastar 100 !</button>
              </div>
            )
          }
        </MyContext.Consumer>
      </div>
    )
  }
}
