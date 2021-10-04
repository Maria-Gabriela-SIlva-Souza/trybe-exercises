//Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = require ('./01-uppercase');

it('Verifica se a palavra gabi, volta na callback como GABI', (done) => {
    uppercase('gabi', (str) => {
      try {
        expect(str).toBe('GABI');
        done();
      } catch (error) {
        done(error);
      }
    });
});