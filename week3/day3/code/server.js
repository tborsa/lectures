const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const cookieSession = require('cookie-session');

const { questions, createQuestion } = require('./data-helpers');

const app = express();

const PORT = 3000;



// use sets up middleware, function that will be run before all requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cookieSession({
  name: 'session',
  keys: ['key1', "key2"]
}));

app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});

let users = {
  'tr0vis': {
    username: 'tr0vis',
    password: 'ilikecats'
  }
};

// Routes

// USERS

// GET /user/login (login) (get username + password sent in body)
app.get('/user/login', (request, response) =>{
  response.render('login');
});
// GET /user/register (register)
app.get('/user/register', (request, response) =>{
  response.render('register');
});

// GET /user/:username (get & show username)
app.get('/user/:username', (request, response) =>{
  // get some user info and pass it to the view as template vars
  const userInfo = users[request.params.username];
  // check if user is logged in for this oage
  console.log("these are the cookies:", request.session);
  let loggedInUsername = request.session.username;
  if (loggedInUsername === request.params.username) {
    response.render('user_page', userInfo);
  } else {
    response.redirect('/user/login');
  }
});

// POST /user/login (login)
app.post('/user/login', (request, response) =>{
  const user = request.body;
  // if user name and password match the user db
  const dbUser = users[user.username];
  if (dbUser) {
    // checking if the password matches
    bcrypt.compare(user.password, users[user.username].password, (err, result) => {
      // add value to our users
      if (result) {
        request.session.username = user.username;
        response.redirect(`/user/${user.username}`);
      } else {
        response.redirect('/user/register');
      }
    });
  } else {
    response.redirect('/user/register');
  }
});

// POST /user (register create a new usere)
app.post('/user', (request, response) =>{
  // get value
  const user = request.body;
  // check is user exists & check if value is valid
  if (user.username && user.password && !users[user.username]) {
    // add value to our users
    // logic to test the strength of the password
    bcrypt.hash(user.password, 1, (err, hash) => {
      users[user.username] = {
        username: user.username,
        password: hash
      };
      request.session.username =  user.username;
      response.redirect(`/user/${user.username}`);
    });
  } else {
    response.redirect('/user/register');
  }
});


// POST /user/logout (logout) (know who the current user is from the cookies)
app.post('/user/logout', (request, response) =>{
  request.session.username = null;
  response.redirect('/user/login');
});



// QUESTIONS

// GET /questions/:id/edit form to edit the question (UPDATE)
app.get('/questions/:id/edit', (request, response) => {
  // ejs html layout + data
  response.render('edit');
});

// GET /questions/new show the form to add a question (CREATE)
app.get('/questions/new', (request, response) => {
  // ejs html layout + data
  response.render('new');
});

// GET /questions/:id a question (READ)
app.get('/questions/:id', (request, response) => {
  // ejs html layout + data
  const questionId = request.params.id;
  let question = questions[questionId];
  response.render('show', {question: question, questionId: questionId});
});

// GET /questions all questions (BROWSE)
app.get('/questions', (request, response) => {
  // ejs html layout + data
  response.render('index', { questions: questions });
});

// POST /questions adding a questions (CREATE)
app.post('/questions', (request, response) => {
  // ejs html layout + data
  console.log("a user tried to add a new question");
  console.log('with the data', request.body);
  const newQuestionId = createQuestion(request.body);
  response.redirect(`/questions/${newQuestionId}`);
});

// (Answer)
app.post('/questions/:id/answer', (request, response) => {
  // ejs html layout + data
  const answer = request.body.answer;
  const questionId = request.params.id;
  const question = questions[questionId];
  if (question.answer === answer) {
    response.redirect(question.reward);
  } else {
    response.redirect('/questions');
  }
});

// PUT/POST /questions/:id/edit edits a question (UPDATE)
app.post('/questions/:id/edit', (request, response) => {
  // ejs html layout + data
});

// DELETE /questions delete a question (DELETE)
app.post('/questions/:id', (request, response) => {
  // ejs html layout + data
  console.log("User is trying to delete a question");
  const questionId = request.params.id;
  delete questions[questionId];
  response.redirect('/questions');
});