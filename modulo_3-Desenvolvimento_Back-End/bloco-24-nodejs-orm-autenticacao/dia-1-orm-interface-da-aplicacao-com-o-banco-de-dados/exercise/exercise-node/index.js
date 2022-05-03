const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const booksRouter = require('./routes/BooksRouter');

app.use(express.json());

app.use('/books', booksRouter);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));