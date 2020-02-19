const express = require('express');
const say = require('say');
const PORT = 8080;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const cookieSession = require('cookie-session');
const question1 = require('../questions/1.json');
const question2 = require('../questions/2.json');
const question3 = require('../questions/3.json');

const server = express();

server.set('view engine', 'ejs');

const users = {
  'travis': {username: 'travis', password: 'iliketurtles'}
};

//middleware
server.use(bodyParser.urlencoded());

server.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

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

//auth views
server.get('/login', (req, res) => {
  res.render('login');
});

server.get('/register', (req, res) => {
  res.render('register');
});

server.get('/me', (req, res) =>{
  // check if a cookie is set 
  console.log('a users cookies', req.session);
  let user = users[req.session.user];
  if (user) {
    res.json(user);
  } else {
    res.redirect('/login');
  }
});

// should be a post request because it better communicates
// what is happening. Me being lazy
server.get('/logout', (req, res) => {
  req.session.user = null;
  res.redirect('/login');
});

// auth post
server.post('/login', (req, res) => {
  let user = users[req.body.username];
  if (user) {
    bcrypt.compare(req.body.password, user.password, (err, result) => {
      //set a cookie
      if (result) {
        req.session.user = user.username;
        res.redirect('/me');
      } else {
        res.redirect('/login');
      }
    });
  } else {
    res.redirect('/login');
  }
});

server.post('/register', (req, res) => {
  if (req.body.username && req.body.password) {
    bcrypt.hash(req.body.password, 1, (err, hash) => {
      // users = { usernames: {username: 'sdfsdf', password: 'sdfsdf}}
      let newUser = {username: req.body.username, password: hash};
      users[req.body.username] = newUser;
      req.session.user =  newUser.username;
      res.redirect('/me');
    });
    console.log(req.body);
  } else {
    res.status(400);
    res.send('not enough information ');
  }
});



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
    res.send(`Congragulations you are correct!!! Get your reward at ${question.reward}`);
  } else {
    res.send('incorrect answer posted try again.');
  }
});



server.listen(PORT, () => {
  console.log('server listening on port, ', PORT);
});