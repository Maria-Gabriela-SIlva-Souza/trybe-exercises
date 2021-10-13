import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */

// 3 - Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!
// 4 - Garanta acesso ao objeto this na função que você declarou.


class App extends React.Component {
  constructor() {
    super()
      //     5 - Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! Primeiramente, defina  um estado inicial para a contagem de cada botão.
      // 🦜 Dica: Uma possibilidade é você definir três chaves, uma para cada botão!
    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)

  }
  // 7 - Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }
  
  handleClick2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))
  }
  
  handleClick3() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
    }))
  }
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    // 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() .
    return (
      <div>
        <button onClick={this.handleClick}>Meu botão {this.state.numeroDeCliques}</button>
        <button onClick={this.handleClick2}>Meu botão 2 {this.state.numeroDeCliques2}</button>
        <button onClick={this.handleClick3}>Meu botão 3 {this.state.numeroDeCliques3}</button>
      </div>
    )


  }
}

export default App;
