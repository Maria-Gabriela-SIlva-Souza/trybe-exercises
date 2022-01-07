// 1 - Crie um erro personalizado que será chamado se a pessoa usuária digitar apenas um número.
// Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?
// Utilize o throw new Error e o bloco try/catch .
// Imprima o erro no parágrafo com id result , para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!
// Evite funções que tenham muitas responsabilidades distintas.
// 2 - Agora adicione uma outra exceção, caso a pessoa usuária digite um valor que não seja numérico.
// Você pode fazer essa verificação utilizando a função isNan() .

function verifyIsNumber(value1, value2) {
  if (isNaN(value1) || isNaN(value2)) {
    throw new Error('Informe apenas números para realizar a soma');
  }

  if (!value1 || !value2) {
    throw new Error('Informe os dois valores para realizar a soma');
  }
}

function sum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    verifyIsNumber(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  } catch (error) {
    document.getElementById('result').innerHTML = `Erro: ${error.message}`;
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}


// 3 - Você se lembrou de limpar os inputs após o clique do botão? Teve que repetir código para isso? Que tal refatorar sua função utilizando o finally ?

function sum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    verifyIsNumber(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (error) {
    document.getElementById('result').innerHTML = `Erro: ${error.message}`;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}