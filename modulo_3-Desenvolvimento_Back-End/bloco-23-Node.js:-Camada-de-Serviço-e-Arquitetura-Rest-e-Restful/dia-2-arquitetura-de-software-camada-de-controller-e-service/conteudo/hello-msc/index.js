// hello-msc/index.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const authorsRouter = require('./routers/authorsRouter');

app.use('/authors', authorsRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});