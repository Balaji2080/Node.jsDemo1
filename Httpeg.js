const http = require('http');
const port = 8080;
const { getUrl } = require('./utils');
http
  .createServer(function (request, response) {
    console.log('server created with port', port);
    const url = getUrl(request.url);
    switch (url) {
      case 'file1':
        break;
      case 'file2':
        break;
      default:
    }
    response.writeHead(200, { 'content-Type': 'text/html' });
    response.write('Hello world');
    response.end();
  })
  .listen(8000);
