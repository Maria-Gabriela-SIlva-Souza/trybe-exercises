// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
};

const fetchJoke = () => {
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => dom(data));
};

const dom = (data) => {
  const h2 = document.querySelector('#jokeContainer');
  h2.innerHTML = data.joke;
}

window.onload = () => fetchJoke();

// const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {
//   fetch(API_URL, { headers: { Accept: 'application/json' } })
//     .then(response => response.json())
//     .then(data =>
//       document.getElementById('jokeContainer').innerText = data.joke
//     );
// }

// window.onload = () => fetchJoke();