const express = require('express');
const PORT = 8080;
const question1 = require('../questions/1.json');
const question2 = require('../questions/2.json');
const question3 = require('../questions/3.json');
const bodyParser = require('body-parser');
const say = require('say');

const server = express();

// views
server.set('view engine', 'ejs');

//Middleware
server.use(bodyParser.urlencoded());
server.use('/public', express.static('public'));

server.use('/mission', (req, res, next) => {
  console.log("i got a request");
  next();
});

server.use('/', (req, res, next) => {
  console.log("next middleware");
  next();
});

server.use('/mission', (req, res, next) => {
  console.log("next middleware");
  next();
});

//Routing

//GET

server.get('/mission', (req, res) => {
  res.send('What is the answer to ');
});

server.get('/', (req, res) => {
  res.send('This is the super secret spy server go to /mission for your question.');
});

server.get('/question/all', (req, res) => {
  res.send(`here are all the questions`);
});

server.get('/question/:questionNumber', (req, res) => {
  if (req.params.questionNumber === '1') {
    res.render('question', {question: question1});
    // res.send(`Your question is: ${question1.question}`);

  } else if (req.params.questionNumber === '2') {
     res.render('question', {question: question2});
    // res.send(`Your question is: ${question2.question}`);

  } else {
     res.render('question', {question: question3});
    // res.send(`Your question is: ${question3.question}`);
  }
});


//POST

server.post('/answer/:questionNumber', (req,res) => {
  let answer = '';
  let reward = '';
  if (req.params.questionNumber === '1') {
    answer = question1.answer;
    reward = question1.reward;
  } else if (req.params.questionNumber === '2') {
    answer = question2.answer;
    reward = question2.reward;
  } else {
    answer = question3.answer;
    reward = question3.reward;
  }
  console.log('user attempted to answer a question', req.body);
  if (req.body.answer.toUpperCase() === answer.toUpperCase()) {
    say.speak(`someone answered question ${req.params.questionNumber}`);
    res.render('answer', {message: 'success', reward: reward});
  } else {
    res.send(' that was not the answer!!');
  }
});




server.listen(PORT, () => {
  console.log("server listening on port", PORT);
});