const API_URL = `https://api.coincap.io/v2/assets`;

const fetchCriptoMoeda = () => {
  fetch(API_URL)
    .then(response => response.json())
    .then(data => dataCripto(data.data))
}

const dataCripto = (data) => {
  data
  .filter(({rank}) => rank < 11)
  .map(({name, symbol, priceUsd, }) => {
    const criptomoedas = document.getElementById('criptomoedas');
    const li = document.createElement('li');
    li.innerText = `${name} (${symbol}): ${priceUsd} USD`
    criptomoedas.appendChild(li);
  })
}


window.onload = () => fetchCriptoMoeda();