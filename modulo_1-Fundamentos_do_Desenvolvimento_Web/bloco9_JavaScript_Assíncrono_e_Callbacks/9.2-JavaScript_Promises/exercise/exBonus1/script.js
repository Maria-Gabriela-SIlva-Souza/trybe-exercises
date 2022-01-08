window.onload = () => {

  const fetchUsdCurrencies = () => {
    const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json'

    const currencieBRL =
      fetch(url)
        .then((response) => response.json())
        .then((data) => data.usd.brl)
        .catch((error) => error.toString());

    return currencieBRL;
  };

  const dataCripto = async (data) => {
    const convertBRL = await fetchUsdCurrencies();

    data
      .filter(({ rank }) => rank < 11)
      .map(({ name, symbol, priceUsd, }) => {
        const criptomoedas = document.getElementById('criptomoedas');
        const li = document.createElement('li');
        const brlPrice = priceUsd * convertBRL;
        li.innerText = `${name} (${symbol}): ${brlPrice} BRL`
        criptomoedas.appendChild(li);
      })
  }


  const API_URL = `https://api.coincap.io/v2/assets`;

  const fetchCriptoMoeda = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => dataCripto(data.data))
      .catch((error) => error.toString());
  }
  
  fetchCriptoMoeda();
};