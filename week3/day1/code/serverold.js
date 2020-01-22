const http = require('http');
const PORT = 8080;
const say = require('say');

const routeLookup = {
  'GET' : {
    '/': (res) => {
      res.end('This is the super secret spy server, await instructions, make a request to /missions');
    },
    '/missions': (res) => {
      res.end('Secret question what is  34*12/4 + 4');
    },
    [`/answer/${34*12/4 + 4}`]: (res) => {
      say.speak("Help me i'm alive!");
      res.end(' Congragulations you completed your MISSION!!! ');
    }
  },
  'POST': {

  }
};

const server = http.createServer((req, res) => {
  console.log("a new request happened");
  const {method, url}  = req;

  if (method in routeLookup && url in routeLookup[method]) {
    routeLookup[method][url](res);
  } else {
    res.end("I could not find what you were looking for");
  }
});

server.listen(PORT, () => {
  console.log('Server listening on port: ', PORT);
});