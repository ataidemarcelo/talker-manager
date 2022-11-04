const express = require('express');
const bodyParser = require('body-parser');

const routers = require('./routers');
const { OK } = require('./utils/statusCode');

const app = express();

app.use(bodyParser.json());
app.use(routers);

const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(OK).send();
});

app.listen(PORT, () => {
  console.log('Online!!!');
});
