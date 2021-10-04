const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
const select = document.getElementById ('estados');

for (let index = 0; index < estados.length; index += 1) {
  const option = document.createElement ('option');
  select.appendChild (option).innerText = estados[index];
  select.appendChild (option).value = estados[index];
}