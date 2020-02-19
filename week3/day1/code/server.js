const express = require('express');
const say = require('say');
const PORT = 8080;
const bodyParser = require('body-parser');
const question1 = require('../questions/1.json');
const question2 = require('../questions/2.json');
const question3 = require('../questions/3.json');

const server = express();

server.set('view engine', 'ejs');

//middleware
// intercepting all incomming bodies and parsing them from
// urlencoded to json. 
server.use(bodyParser.urlencoded());
server.use('/public', express.static('public'));
server.use((req, res, next) => {
  console.log('first middle ware');
  next();
});
server.use((req, res, next) => {
  console.log('second middle ware');
  next();
});

//routes
server.get('/', (req, res) => {
  res.send('This is the super secret spy server, go to /question to get your first mission');
});

server.get('/question/info', (req, res) => {
  res.send('This is the super secret spy server, go to /question/# to get your first mission, and then make a put request to /question/#');
});

server.get('/question/:id', (req, res) => {
  console.log(req.params.id);
  let question;
  if (req.params.id === '1') {
    question = question1.question;
  } else if (req.params.id === '2') {
    question = question2.question;
  } else {
    question = question3.question;
  }
  res.render('question', {question: question});
  // res.send(`Your question should you choose to accept is: ${question}`);
});

server.put('/question/:id', (req, res) => {
  // console.log('body', req.body);
  let question;
  if (req.params.id === '1') {
    question = question1;
  } else if (req.params.id === '2') {
    question = question2;
  } else {
    question = question3;
  }
  if (req.body.answer && req.body.answer.toLowerCase() === question.answer) {
    say.speak(`someone solved the riddle! ${question.question}`);
    res.send(`Congragulations you are correct!!! Get your reward at ${question.reward}`);
  } else {
    res.send('incorrect answer posted try again.');
  }
});



server.listen(PORT, () => {
  console.log('server listening on port, ', PORT);
});