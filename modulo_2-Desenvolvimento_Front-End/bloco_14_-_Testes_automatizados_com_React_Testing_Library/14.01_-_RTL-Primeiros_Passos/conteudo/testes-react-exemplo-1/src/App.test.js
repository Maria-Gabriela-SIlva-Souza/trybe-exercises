import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; //==> biblioteca que testa o comportamento da aplicação (interação)
import App from './App';


describe('Tela de iserção de email', () => {

  //TESTE EXEMPLO 1
  it('Verifica se existe um input de email na tela', () => {
    //Acessar elementos da tela
    render(<App />);
    const inputEmail = screen.getByLabelText('Email'); //getByLabelText ==> Retorna a label com o texto Email

    //Fazer os testes
    expect(inputEmail).toBeInTheDocument(); // Sintaxe usada para garantir que algo (input) está sendo renderizado na tela
    expect(inputEmail.type).toBe('email'); // Sintaxe usada para garantir que o type do input é tipo 'email'
  });


  //TESTE EXEMPLO 2
  it('Verifica se existe dois botões na tela', () => {
    //Acessar elementos da tela
    render(<App />);
    const buttons = screen.getAllByRole('button'); //getAllByRole ==> Pega os elementos através da função [retorna um array com os mesmos]

    //Fazer os testes
    expect(buttons).toHaveLength(2); // Sintaxe usada para garantir que temos 2 botões (usando o length do array criado anteriormente)
  });


  //TESTE EXEMPLO 3
  it('Verifica se existe o botão de Enviar', () => {
    //Acessar elementos da tela
    render(<App />);
    const button = screen.getByTestId('id-send'); //getByTestId ==> Pega o elemento que tem o data-testid correspondente 

    //Fazer os testes
    expect(button).toBeInTheDocument(); // Sintaxe usada para garantir que temos 2 botões (usando o length do array criado anteriormente)
    expect(button).toHaveValue('Enviar'); //toHaveValue ==> Pega o elemento que tem o value correspondente
  });


  //TESTE EXEMPLO 4 - Testando comportamento
  it('Verifica que, ao digitar o email e clicar em enviar, o email é renderizado', () => {
    //Acessar elementos da tela
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    const button = screen.getByTestId('id-send');
    const userEmail = screen.getByTestId('id-email-user');

    //Interagir com os elementos (se necessário)
    userEvent.type(inputEmail, 'teste@teste.com') //userEvent ==> comportamento, simula como se fosse uma pessoa interagindo | type(input, valor) - digitar, param1-qual input // param2-oque foi digitado
    userEvent.click(button)

    //Fazer os testes
    expect(inputEmail).toHaveValue(''); // Ao clicar no botão input fica vazio
    expect(userEmail).toHaveTextContent('Valor: teste@teste.com'); //toHaveTextContent ==> verifica se contem o texto
  })
})
  // ETAPAS QUE OS TESTES (NORMALMENTE) SEGUEM PARA SEREM IMPLEMENTADOS
  //Acessar elementos da tela
  //Interagir comn os elementos (se necessário)
  //Fazer os testes