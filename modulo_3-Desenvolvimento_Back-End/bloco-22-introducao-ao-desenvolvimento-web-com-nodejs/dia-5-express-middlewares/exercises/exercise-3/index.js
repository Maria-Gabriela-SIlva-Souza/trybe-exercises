const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const postsRouter = require('./routers/postsRouter');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/posts', postsRouter);

app.listen(3001, () => console.log('Run server http://localhost:3001'));