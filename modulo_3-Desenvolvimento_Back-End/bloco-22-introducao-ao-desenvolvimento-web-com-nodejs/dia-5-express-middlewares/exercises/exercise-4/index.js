const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const teamRouter = require('./routers/teamsRouter');
const PORT = 3003;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/teams', teamRouter);

app.listen(PORT, () => console.log('Run server http://localhost:3003'));