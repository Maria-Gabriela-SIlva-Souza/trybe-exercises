import App from './app';

const app = new App().express;

app.listen(3005, () => console.log('Ouvindo na porta 3005'));