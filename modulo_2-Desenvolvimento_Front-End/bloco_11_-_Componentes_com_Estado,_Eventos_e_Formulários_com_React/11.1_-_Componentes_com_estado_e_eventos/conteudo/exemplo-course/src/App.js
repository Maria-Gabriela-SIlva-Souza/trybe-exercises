import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeCliques: 0
    }
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    const { numeroDeCliques } = this.state;

    return (
      <button onClick={this.handleClick} >Meu botão {numeroDeCliques}</button>
    )
  }
}

export default App;
