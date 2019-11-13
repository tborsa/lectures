const express = require('express');
const bodyParser = require('body-parser');
const say = require('say');
const question1 = require('../questions/1.json');
const question2 = require('../questions/2.json');
const question3 = require('../questions/3.json');
const PORT = 8080;
const server = express();

//templating engines
server.set('view engine', 'ejs');

//Middleware
server.use(bodyParser.urlencoded());
server.use('/public', express.static('public'));
server.use(function(request, response, next) {
  //authenticate user, log info, 
  console.log("Incomming request!!!");
  next();
});

//routes
server.get('/', function(request, response) {
  //send msg back to the client
  const data = {
    test: "This is a super secret spy server get your missions at /mission",
    thing: 1,
    two: 2
  };
  response.render('index', data);
});

server.get('/mission/:id', function(request, response) {
  //send msg back to the client
  console.log(request.params.id);
  //get the param and deliver a differnt mission depending on the value
  if (request.params.id == 1) {
    response.render('missions', question1);
  } else if (request.params.id == 2) {
    response.render('missions', question2);
  } else {
    response.render('missions', question3);
  }
});

server.post('/answer/:id', function(request, response) {
  //send msg back to the client
  console.log('POST to ANSWER', request.body.answer);
  const answer = request.body.answer;
  let solution = '';
  let reward = '';
  if (request.params.id == 1) {
    solution = question1.answer;
    reward = question1.reward;
  } else if (request.params.id == 2) {
    solution = question2.answer;
    reward = question2.reward;
  } else {
    solution = question3.answer;
    reward = question3.reward;
  }

  if (answer == solution) {
    say.speak('Congragulations');
    response.send('congragulations your reward is at '+ reward);
  } else {
    response.send('try again');
  }
});

server.listen(PORT, function() {
  console.log('server listening on port ' + PORT);
});