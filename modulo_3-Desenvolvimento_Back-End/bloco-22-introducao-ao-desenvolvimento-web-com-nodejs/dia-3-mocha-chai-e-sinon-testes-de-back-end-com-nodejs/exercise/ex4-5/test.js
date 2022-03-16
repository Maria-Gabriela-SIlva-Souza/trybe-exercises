const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const writeToFile = require('./writeToFile');

const conteudoDoArquivo = 'Realizando testes';

describe('Executa a função writeToFile', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = writeToFile('arquivo.txt', conteudoDoArquivo);

      expect(resposta).to.be.a('string');
    });

    it('é igual a "ok"', () => {
      const resposta = writeToFile('arquivo.txt', conteudoDoArquivo);

      expect(resposta).to.be.equals('ok');
    });
  });
});