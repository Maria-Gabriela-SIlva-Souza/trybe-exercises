import './App.css';
import React from 'react';
import ValidEmail from './ValidEmail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail:'',
    }
  }

  changeEmail(value) {
    this.setState({email:value});
  }
  changeSaveEmail(value) {
    this.setState({saveEmail:value, email: ''});
  }

  render() {
    const {email, saveEmail} = this.state;

    return(
      <div>
        <label htmlFor='id-email'>
          Email
          <input id='id-email' value={email} type='email' onChange={(e) => this.changeEmail(e.target.value)} />
        </label>
        
        <input id='btn-enviar' type='button' data-testid='id-send' value='Enviar' onClick={() => this.changeSaveEmail(email)} />

        <input id='btn-id' type='button' value='Voltar' />

        {/* <h2 data-testid='id-email-user'>{`Valor: ${saveEmail}`}</h2> */}
        {/* Exercicio de teste de um componente isolado */}
        <ValidEmail email={ saveEmail } /> 
      </div>
    )
  }

}

export default App;
