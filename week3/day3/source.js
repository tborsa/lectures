let users = {
  'tr0vis': {
    username: 'tr0vis',
    password: 'ilikecats'
  }
};

//use cookie middleware 
server.use(express.cookieParser());

//register
server.post('/register', (req, res) => {
  if (req.body.username && req.body.password) {
    users[req.body.username] = {username: req.body.username, password: req.body.password};
    res.cookie('user', req.body.username);
    res.redirect('/me');
  } else {
    res.status(400);
    res.send('invalid user');
  }
});

//login 
server.post('/login', (req,res) => {
  if (users[req.body.username] && users[req.body.username].password === req.body.password) {
    res.cookie('user', req.body.username);
  }
});

//logout
server.post('/logout', (req,res) => {
  res.clearCookie("user");
  res.redirect('/login');
});

//me page
server.post('/logout', (req,res) => {
  let user = users[req.cookies.user];
  if (user) {
    res.send(user);
  } else {
    res.redirect('/login');
  }
});

//bcrypt=========================================================bcrypt


//cookie session
const bcrypt = require('bcrypt');
//register
bcrypt.hash(req.body.password, 1, function(err, hash) {
  if (!err) {
    users[req.body.username] = {username: req.body.username, password: hash};
    res.cookie('user', req.body.username);
    res.redirect('/me');
  }
});
//login
if (users[req.body.username] ) {
  bcrypt.compare(req.body.password, users[req.body.username].password, function(err, result) {
    if (result) {
      res.cookie('user', req.body.username);
      res.redirect('/me');
    } else {
      res.status(401);
      res.send('incorrect email or password');
    }
  });
}

//cookie-session=========================================================cookie-session
const cookieSession = require('cookie-session')

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

req.session.user = null;
req.session.user = 'Tr0vis';