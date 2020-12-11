const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dataHelpers = require('./data-helpers.js');
const cookieSession = require('cookie-session');

const app = express();
const PORT = 3001;

app.use(cookieSession({
  name: 'session', 
  keys: ['onekey']
}));

app.use(bodyParser.urlencoded({extended: true}));// urlencoded data => js object
// app.use(cookieParser());

app.set('view engine', 'ejs'); // pug  html/GUI + data

const authorize = (req, res, next) => {
  if (req.session.username) {
    next();
  } else {
    res.redirect('/users/login');s
  }
}

app.use('/passwords', authorize);

// PASSWORDS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// BROWSE
app.get('/passwords',  (req, res) => {
  const passwords = dataHelpers.getPasswords(req.session.username);
  const templateVars = {passwords: passwords, test: 'this is for test'};
  res.render('index', templateVars);
})

// NEW
app.get('/passwords/new', authorize,  (req, res) => {
  res.render('new', {});
});

// pattern matching routes /passwords/***
app.get('/passwords/:id', (req, res) => {
  const passwordId = req.params.id;
  const password = dataHelpers.getPassword(passwordId);
  if (!password) {
    res.send('no password found', 404);
  } else {
    const templateVars = {
      password: password,
    };
    res.render('show', templateVars);
  }
})

// Create/ADD
app.post('/passwords', (req, res) => {
  const success = dataHelpers.addPassword(req.body);
  if (success) {
    res.redirect('/passwords');
  } else {
    res.send("could not add password", 500);
  }
})

// Create/ADD
app.post('/passwords/:id/delete', (req, res) => {
  const success = dataHelpers.removePassword(req.params.id);
  if (success) {
    res.redirect('/passwords');
  } else {
    res.send("could not delete password", 500);
  }
})

// USERS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// register
app.get('/users/register', (req, res) => {
  res.render('register');
})

app.post('/users', (req, res) => {
  if (dataHelpers.addUser(req.body.username, req.body.password)) {
    // need to set cookie
    req.session.username = req.body.username;
    res.redirect('/passwords');
  } else {
    res.send('could not register user', 500);
  }
})

// login
app.get('/users/login', (req, res) => {
  res.render('login', {});
})

// login
app.post('/users/login', (req, res) => {
  if (dataHelpers.authenticateUser(req.body.username, req.body.password)){
    req.session.username = req.body.username;
    res.redirect("/passwords");
  } else {
    res.send('Incorrect username or password', 401);
  }
})

// logout
app.post('/users/logout', (req, res) => {
  req.session.username = null;
  res.redirect('/users/login');
})


app.listen(PORT, () => {
});

