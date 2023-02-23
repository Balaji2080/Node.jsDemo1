const http = require('http');
const port = 8080;
http
  .createServer(function (request, response) {
    console.log('server created with port', port);
    console.log(request.url);
    response.writeHead(200, { 'content-Type': 'text/html' });
    response.write('Hello world');
    response.end();
  })
  .listen(8000);
