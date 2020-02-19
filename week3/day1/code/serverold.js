const http = require('http');
const PORT = 8080;
const say = require('say');

const routeLookup = {
  'GET': {
    '/': (request, response) => {
      response.end('This is the super secret spy server, await further instructions');
    },
    '/question': (request, response) => {
      response.end(`What is the answer to 34 * 6 + 127`);
    },
    [`\${34 * 6 + 127}`]: (request, response) => {
      response.end('That was not the correct answer');
    },
    '/users/:id':(request, response) => {
      
    } 
  },
  'POST': {
    '/question': (request, response) => {

    }
  },
  'DEFAULT': (request, response) => {
    response.end('not found');
  }
};

const server = http.createServer((request, response) => {
  console.log('got a request, ', request.method, request.url);
  if (routeLookup[request.method] && routeLookup[request.method][request.url]) {
    routeLookup[request.method][request.url](request, response);
  } else {
    routeLookup['DEFAULT'](request, response);
  }
});


server.listen(PORT, () => {
  console.log('server listening on port, ', PORT);
});