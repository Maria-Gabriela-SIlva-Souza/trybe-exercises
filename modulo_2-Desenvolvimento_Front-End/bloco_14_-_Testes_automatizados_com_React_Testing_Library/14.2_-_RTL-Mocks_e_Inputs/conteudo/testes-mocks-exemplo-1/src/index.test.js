function retornaNumeroAleatorio() {
  return Math.floor(Math.random() * 100);
}

function divisivelPorDois() {
  return (retornaNumeroAleatorio() % 2) === 0
}

function somaDoisNumeros() {
  return retornaNumeroAleatorio() + retornaNumeroAleatorio();
}

describe('Aprendendo sobre Mocks', () => {
  it('Testa se a função foi chamada', () => {
    somaDoisNumeros = jest.fn(); //Mocka a função
    somaDoisNumeros();  //é preciso chamar a função ao menos uma vez para verificação
    expect(somaDoisNumeros).toHaveBeenCalled(); // Realiza o teste
  });

  it('Testa o resultado da função', () => {
    somaDoisNumeros = jest.fn().mockReturnValue(8); //Mocka a função | mockReturnValue() ==> define o retorno que ela terá para os testes
    expect(somaDoisNumeros()).toBe(8);
  });

  it('Testa quantas vezes a função foi chamada', () => {
    somaDoisNumeros = jest.fn(); //Mocka a função.
    somaDoisNumeros();
    
    expect(somaDoisNumeros).toHaveBeenCalledTimes(1); // toHaveBeenCalledTimes() ==> Mostra quantas vezes a função foi chamada
  });

  it('Testa que retorna true quando o número é par', () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(2);
    expect(divisivelPorDois()).toBe(true);
  });

  it('Testa que retorna true quando o número é ímpar', () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(3);
    expect(divisivelPorDois()).toBe(false);
  });
})