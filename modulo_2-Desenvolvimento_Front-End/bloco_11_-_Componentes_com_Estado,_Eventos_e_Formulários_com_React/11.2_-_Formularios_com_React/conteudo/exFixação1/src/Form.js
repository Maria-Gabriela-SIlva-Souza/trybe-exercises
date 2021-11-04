import React from 'react';

// 1 - Crie um formulário com um campo select , dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado
// 2 - Baixe a React Developer Tools e veja, nela, o dado inserido no elemento controlado sendo salvo no Estado.
// 3 - Faça todos os seus elementos componentes do formulário ficarem 100% controlados. Faça um event handler genérico para lidar com eles.
// 4 - Acrescente no seu formulário um input do tipo checkbox e garanta que seu event handler esteja tratando este caso corretamente.
// 5 - Busque na documentação de React acerca de formulários (primeiro link da seção de Recursos Adicionais!) como se deve adicionar um input para arquivos . Acrescente um ao seu formulário.
// 6 - Encapsule alguns dos seus campos num fieldset . Entenda como ele funciona lendo a documentação .

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      idade: '',
      aprendizado: '',
      comentario: '',
      conteudo: false,
      arquivo: ''
    }

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h2>Exercicio 1 de fixação</h2>
        <form>
          <fieldset>
            <fieldset>
              Nome:
              <input
                name='name'
                type='text'
                value={this.state.name}
                onChange={this.handleChange}
              />
              Idade:
              <input
                name='idade'
                type='number'
                value={this.state.idade}
                onChange={this.handleChange}
              />
            </fieldset>
            <br />
            <fieldset>
              Sobre React:
              <select
                name='aprendizado'
                value={this.state.aprendizado}
                onChange={this.handleChange}
              >
                <option value=''></option>
                <option value='aprendendo'>Aprendendo</option>
                <option value='entendi'>Entendi</option>
                <option value='perdida'>To perdida</option>
              </select>
              <br />
              Está gostando do conteúdo?
              <input
                name='conteudo'
                type='checkbox'
                value={this.state.conteudo}
                onChange={this.handleChange}
              />
            </fieldset>
            <br />
            <fieldset>
              Escreva algo
              <textarea
                name='comentario'
                type='text'
                value={this.state.comentario}
                onChange={this.handleChange}
              >
              </textarea>
            </fieldset>
            <br />
            <fieldset>
              Insira um arquivo:
              <input
                name='arquivo'
                type='file'
                value={this.state.arquivo}
                onChange={this.handleChange}
              />
            </fieldset>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
