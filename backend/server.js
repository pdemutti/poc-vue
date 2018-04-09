'use strict';

const app = require('./config/express')();
const http = require('http');

http.createServer(app).listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);
});
