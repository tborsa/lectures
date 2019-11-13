const http = require('http');
const say = require('say');
const PORT = 8080;
const routes = {
  "GET": {
    "/mission": function (request, response) {
      response.end('What is 45+12*68+15?');
    },
    [`/${45+12*68+15}`]: function (request, response) {
      say.speak("Congragulations!!!");
      response.end("Congragulations you finished the mission!!!");
    }
  },
  "DEFAULT": function (request, response) {
    response.end('This is a super secret spy server, directions to follow... make a GET request to /mission');
  }
};


const server = http.createServer(function(request,response) {
  console.log('url', request.url);
  console.log('method', request.method);
  if (routes[request.method] && routes[request.method][request.url]) {
    routes[request.method][request.url](request, response);
  } else {
    routes["DEFAULT"](request,response);
  }
});

server.listen(PORT, function() {
  console.log("Server listening on port " + PORT);
});