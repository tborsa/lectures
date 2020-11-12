const express = require('express');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3000;

// use sets up middleware, function that will be run before all requests
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieSession(
  {
    name: 'session',
    keys: ['randomstring']
  }
));

app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});


let users = {
  'tr0vis': {
    username: 'tr0vis',
    password: bcrypt.hashSync('ilikecats', 2)
  }
};

// Routes

// USERS

app.get('/', (req, res) => {
  const username = req.session.user;
  console.log("what is username", username);
  const templateVars = {username: null};
  if (users[username]) {
    templateVars.username = users[username].username;
  }
  res.render('index', templateVars);
});

// get to login page (show the form)
app.get('/login', (req, res) => {
  res.render('login' );
});

// get to register (show register form)
app.get('/register', (req, res) => {
  res.render('register');
});

app.post('logout', (req, res) => {
  req.session.user = null;
  res.redirect('/login');
});

// post to login route
app.post('/login', (req, res) => {
  // get the user from the request body
  // validation
  console.log('users object', users);
  if (users[req.body.username]) {
    // add new user to users object
    if (bcrypt.compareSync(req.body.password, users[req.body.username].password)) {
      // create a cookie (so we remember the user)
      // res.cookie('user', req.body.username);
      req.session.user = req.body.username;
      // redirect (home or user page)
      res.redirect('/');
    } else {
      res.render('login', {error: 'password inc'});
      res.redirect('/login');
    }
  }
});

// let users = {
//   'tr0vis': {
//     username: 'tr0vis',
//     password: 'ilikecats'
//   }
// };
// post to register (create a new user)
app.post('/register', (req, res) => {
  // get the user from the request body
  console.log('user body:, ', req.body);
  // validation
  if (!users[req.body.username]) {
    // add new user to users object
    const hash = bcrypt.hashSync(req.body.password, 2);
    users[req.body.username] = {
      username: req.body.username,
      password: hash
    };
    // create a cookie (so we remember the user)
    // res.cookie('user', req.body.username);
    req.session.user = req.body.username;
  }
  // redirect (home or user page)
  res.redirect('/');
});
