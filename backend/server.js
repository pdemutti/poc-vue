'use strict';

const app = require('./config/express')();
const http = require('http');

http.createServer(app).listen(app.get('port'), () => console.log(`
  *** Paulo The Mute and Tiago Lima ;) ***
  *** Baguio Rodando na porta ${app.get('port')} ***`
));
