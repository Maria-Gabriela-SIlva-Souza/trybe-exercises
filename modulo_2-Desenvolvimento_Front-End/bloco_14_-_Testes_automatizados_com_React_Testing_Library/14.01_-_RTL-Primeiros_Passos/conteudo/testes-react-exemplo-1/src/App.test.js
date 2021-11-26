import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica se existe um input de email na tela', () => {
  //Acessar elementos da tela
  render(<App />);
  const inputEmail = screen.getByLabelText('Email'); //getByLabelText ==> Retorna a label com o texto Email
  //Fazer os testes
  expect(inputEmail).toBeInTheDocument(); // Sintaxe usada para garantir que algo está sendo renderizado na tela
  expect(inputEmail.type).toBe('email'); // Sintaxe usada para garantir que o type do input é tipo 'email'
});

  // ETAPAS QUE OS TESTES (NORMALMENTE) SEGUEM PARA SEREM IMPLEMENTADOS
  //Acessar elementos da tela
  //Interagir comn os elementos (se necessário)
  //Fazer os testes