// 4 - Acrescente no seu formulário um input do tipo checkbox e garanta que seu event handler esteja tratando este caso corretamente.

import React, { Component } from 'react';
import Email from './Email';
import Name from './Name';
import Age from './Age';
import Anedota from './Anedota'
import Termos from './Termos';
import Titulo from './Titulo';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      age: '',
      anecdote: '',
      terms: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleError() {
    const { name, email, age, anecdote, terms } = this.state;

    const errorCases = [
      !name.length,
      !email.match(/^\S+@\S+$/i),
      !age.length,
      !anecdote.length,
      !terms,
    ];

    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido,
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { anecdote, terms } = this.state;

    return (
      <div>
          <Titulo />
        <form className="form">

          <Name value={this.state.name} handleChange={this.handleChange} />
          <br />
          <br />
          <Email value={this.state.email} handleChange={this.handleChange} />
          <br />
          <br />
          <Age value={this.state.age} handleChange={this.handleChange} />
          <br />
          <br />
          <Anedota value={this.state.anecdote} handleChange={this.handleChange} />
          <br />
          <br />
          <Termos value={this.state.terms} handleChange={this.handleChange} />

        </form>
      </div>
    );
  }
}

export default Form;