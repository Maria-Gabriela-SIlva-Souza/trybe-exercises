const { expect } = require('chai');

const positivoOuNegativo = require('./positivoOuNegativo');

describe('Executa a função positivoOuNegativo', () => {

  describe('quando o valor de input for diferente de número', () => {
    describe('a resposta', () => {
      it('é um erro', () => {
        const resposta = positivoOuNegativo('string');

        expect(resposta).not.be.a('number');
      });

      it('é a mensagem "o valor deve ser um número"', () => {
        const resposta = positivoOuNegativo('string');

        expect(resposta).to.be.equals('o valor deve ser um número');
      });
    });   
  });

  describe('quando o número for maior que 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = positivoOuNegativo(10);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "positivo"', () => {
        const resposta = positivoOuNegativo(10);

        expect(resposta).to.be.equals('positivo');
      });
    });
  });

  describe('quando o número for menor que 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = positivoOuNegativo(-10);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "negativo"', () => {
        const resposta = positivoOuNegativo(-10);

        expect(resposta).to.be.equals('negativo');
      });
    });
  });

  describe('quando o número for igual a 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = positivoOuNegativo(0);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "neutro"', () => {
        const resposta = positivoOuNegativo(0);

        expect(resposta).to.be.equals('neutro');
      });
    });
  });
});