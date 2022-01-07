// 3.Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const btn = document.getElementById('button');
const p = document.getElementById('p');
let clickCount = 0;

btn.addEventListener('click', () => {
  clickCount += 1;
  p.innerHTML = clickCount;
});