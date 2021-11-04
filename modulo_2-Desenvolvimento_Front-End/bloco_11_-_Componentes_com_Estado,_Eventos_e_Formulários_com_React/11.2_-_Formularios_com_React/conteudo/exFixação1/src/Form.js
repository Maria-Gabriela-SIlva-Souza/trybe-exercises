import React from 'react';

// 1 - Crie um formulário com um campo select , dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado
// 2 - Baixe a React Developer Tools e veja, nela, o dado inserido no elemento controlado sendo salvo no Estado.

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
    }
    
    this.nameChange = this.nameChange.bind(this)

  }

  nameChange(event) {
    this.setState({name: event.target.value})
  }

  render() {
    return (
      <div>
        <h2>Exercicio 1 de fixação</h2>
        <form>
          Nome: <input name='nome' type='text' onChange={this.nameChange}/>
          <br />
          <br />
          Idade:
          <input name='idade' type='number' />
          <br />
          <br />
          Sobre React:
          <select>
            <option value=''></option>
            <option value='aprendendo'>Aprendendo</option>
            <option value='entendi'>Entendi</option>
            <option value='perdida'>To perdida</option>
          </select>
          <br />
          <br />
          <textarea>
            Escreva algo
          </textarea>
        </form>
      </div>
    );
  }
}

export default Form;
