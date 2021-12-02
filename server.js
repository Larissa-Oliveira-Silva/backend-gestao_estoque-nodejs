'use-strict'

const app = require('./bin/express');
const http = require('http').Server(app);
const variables = require('./bin/configuration/variables');

http.listen(variables.Api.port, () => {
  console.info("Api do sistemas de gestão de estoque inicializada com sucesso!", variables.Api.port);
})

