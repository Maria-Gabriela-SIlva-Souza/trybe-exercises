// 3 - Faça todos os seus elementos componentes do formulário ficarem 100% controlados. Faça um event handler genérico para lidar com eles.

import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      age: '',
      anecdote: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, email, age, anecdote } = this.state;

    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <fieldset>
            <label htmlFor="name">
              Nome:
              <input id="name" name="name" type="text" onChange={ this.handleChange } value={ name } />
            </label>

            <label htmlFor="email">
              Email:
              <input id="email" name="email" type="email" onChange={ this.handleChange } value={ email } />
            </label>

            <label htmlFor="age">
              Idade:
              <select id="age" name="age" onChange={ this.handleChange } value={ age }>
                <option value="">Selecione</option>
                <option value="adult">Maior que 18</option>
                <option value="underage">Menor que 18</option>
              </select>
            </label>
            </fieldset>

          <fieldset>
            <label htmlFor="anecdote">
              Anedota:
              <textarea id="anecdote" name="anecdote" onChange={ this.handleChange } value={ anecdote } />
            </label>
          </fieldset>

          <fieldset>
            Escolha um arquivo para anexar
            <br></br> 
            <input type="file" /> 
          </fieldset>      

        </form>
      </div>
    );
  }
}

export default Form;