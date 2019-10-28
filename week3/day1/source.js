const http = require('http');
const PORT = 8080;
const say = require('say');

const server = http.createServer(function respondToRequests(req, res) {
  //first
  res.end("This is the super secret spy debriefing server, make a get requst to /mission to recieve your mission.");
  //later
  if (req.method in routes && req.url in routes[req.method]) {
    routes[req.method][req.url](req,res);
  } else {
    routes["DEFAULT"](req,res);
  }
});

server.listen(PORT, () => {
  console.log("server listening on PORT " + PORT);
});

const routes = {
  GET:{
    '/': function (req, res) {
      res.end("This is the super secret spy debriefing server, make a get requst to /mission to recieve your mission.");
    },
    '/mission': function (req, res) {
      res.end("your mission should you choose to accept, what is the anser to (23+56*4)");
    },
    [`/${23+56*4}`]: function (req, res) {
      say.speak('Congragulations agent mission success');
      res.end("Congragulations agent mission success");
    }
  },
  DEFAULT: function (req, res) {
    res.end("This is the super secret spy debriefing server, make a get requst to /mission to recieve your mission.");
  }
};


//===EXPRESS SERVER =================>



const express = require('express');
const PORT = 8080;
const bodyParser = require('body-parser');
const question1 = require('../questions/1.json');

const server = express();

//set ejs
server.set('view engine', 'ejs');

//Middleware
server.use(bodyParser.urlencoded());
server.use((req,res,next) => {
  console.log("New agent.");
  next();
});

server.use('/public', express.static('public'));

//ROUTES
server.get('/', (req, res) => {
  res.render('index');
});

server.get('/mission', (req, res) => {
  const templateVars = {name: "1", content: question1.question};
  res.render('mission', templateVars);
});

server.post('/answer', (req, res) => {
  if (req.body.answer.toLowerCase() === question1.answer) {
    res.send('for your reward go to ' + question1.reward);
  } else {
    res.send('Try again');
  }
});

server.listen(PORT, () => {
  console.log('Server Listening on ' + PORT);
});