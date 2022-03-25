const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

const authorsRouter = require('./routers/authorsRouter');
const booksRouter = require('./routers/booksRouter');

app.use(bodyParser.json())

app.use('/authors', authorsRouter);

app.use('/books', booksRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}`));