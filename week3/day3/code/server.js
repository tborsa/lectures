const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Server Setup -----------------------------------
const PORT = 3000;
const app = express();
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// DATA -----------------------------------
const users = {
  'tr0vis': {
    username: 'tr0vis',
    password: 'password'
  }
}

// Routes -----------------------------------
// View
app.get('/', (request, response) => {
  console.log('cookies-test:', request.cookies.test.one);
  console.log('cookies-username:', request.cookies.username);

  const templateVars = {user: null};
  if (request.cookies.username && users[request.cookies.username]) {
    //logged in
    templateVars.user = users[request.cookies.username];
  }
  response.render('index', templateVars);
})

// Action
app.post('/login', (request, response) => {
  console.log('body', request.body);
  const username = request.body.username;
  const password = request.body.password;

  if (!username || !password) {
    response.status(400).json({message: 'Bad Request no username/password provided'});
  } else if (users[username] && users[username].password === password) {
    // successfull login
    response.cookie('username', username);
    response.cookie('test', {one: 1, two: 2});
    response.redirect('/');
  } else {
    response.status(403).json({message: 'Incorrect username or password'});
  }
});

app.post('/logout', (request, response) => {
  response.clearCookie('username');
  response.redirect('/');
});


app.listen(PORT, () => {
  console.log('server listening on port:', PORT);
})
