// 1 - Vamos começar pelo arquivo index.js , onde conectamos o Provider aos componentes do nosso App.

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root'),
);