import React from 'react';
import Aprendizado from './Aprendizado';
import Name from './Name';

// 1 - Crie um formulário com um campo select , dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado 
// 2 - Baixe a React Developer Tools e veja, nela, o dado inserido no elemento controlado sendo salvo no Estado.
// 3 - Faça todos os seus elementos componentes do formulário ficarem 100% controlados. Faça um event handler genérico para lidar com eles.
// 4 - Acrescente no seu formulário um input do tipo checkbox e garanta que seu event handler esteja tratando este caso corretamente.
// 5 - Busque na documentação de React acerca de formulários (primeiro link da seção de Recursos Adicionais!) como se deve adicionar um input para arquivos . Acrescente um ao seu formulário.
// 6 - Encapsule alguns dos seus campos num fieldset . 
// 7 - Faça dois de seus campos serem componentes filhos do seu componente de formulário. Garanta que seu estado ainda pertence ao componente pai.
// 8 - Faça duas validações em um desses componentes filhos e uma em um outro.
// 9 - Crie, no estado do componente pai, um campo formularioComErros que deve ser true caso algum desses componentes tenha erros e false caso contrário.

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      idade: '',
      aprendizado: '',
      comentario: '',
      conteudo: false,
      arquivo: '',
      // formularioComErros: false,
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

  // errorForm() {
  //   if (formularioComErros === true) 
  // }

  render() {
    return (
      <div>
        <h2>Exercicio 1 de fixação</h2>
        <form>
          <fieldset>
            <fieldset>
              <Name
                value={this.state.name}
                handleChange={this.handleChange}
              />
              <br />
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
              <Aprendizado
                value={this.state.aprendizado}
                handleChange={this.handleChange}
              />
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
