// Como importar o Redux
// const Redux = require('redux');

// Criando uma Store
// const store = Redux.createStore();


// // Uma store só funciona se passarmos uma função que será responsável por alterar os dados dela: o reducer.
// // O reducer recebe como primeiro parâmetro um state, sendo que seu retorno substituirá o state da store .

// const reducer = (state) => {
//     return state;
// };

// const store = Redux.createStore(reducer);


// // Inicialmente o state vem como undefined , e não queremos isto. Então iremos atribuir a ele um valor padrão.
// const reducer = (state = { login: false, email: "" }) => {
//     return state;
// };

// const store = Redux.createStore(reducer);


// Agora sim, nosso reducer está pronto! Mas o que acontece se nosso valor inicial (que podemos chamar de estado inicial) ficar muito grande? Nosso código vai ficar "bagunçado" né?! Então podemos reescrevê-lo.

const Redux = require('redux');

const ESTADO_INICIAL = {
    login: false,
    email: "",
};

const reducer = (state = ESTADO_INICIAL) => {
    return state;
};

const store = Redux.createStore(reducer);


// Nosso reducer está montado e possui o nosso estado inicial da aplicação. Vamos verificar o output quando acessamos a store com a função getState() .

console.log(store.getState());