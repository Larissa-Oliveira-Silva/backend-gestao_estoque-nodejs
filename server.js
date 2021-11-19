'use-strict'

const app = require('./bin/express');
const http = require('http').Server(app);

http.listen(3000, () => {
  console.info("Api do sistemas de gestão de estoque inicializada com sucesso!");
})

