const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');
const {breadRecipes, addRecipe, deleteRecipe, editRecipe} = require('./data-helpers');

const app = express();
const PORT = 3000;

let users = {
  'tr0vis': {
    username: 'tr0vis',
    password: bcrypt.hashSync('password', 2)
  }
}

let authenticateUser = (username, password) => {
  let user = users[username]; //{username: '', password: ''}
  if (user && bcrypt.compareSync(password, user.password)) {
    return true;
  }
  return false;
}

app.set('view engine', 'ejs'); // combine data + html
app.use(bodyParser.urlencoded());
app.use(cookieSession({
  name: 'session',
  keys: ['onekey']
}));

// auth
// setup template vars
// formatting
// error logging
const customMiddleware = (req, res, next) => {
  console.log('custom middleware');
  if (users[req.session.username]) {
    next();
  } else {
    res.status(401).send('not logged in');
  }
}

const setTemplateVars = (req, res, next) => {
  console.log('custom middleware');
  req.templateVars = {
    appName: 'breaditor',
    recipes: breadRecipes,
    username: req.session.username
  }
  next();
}
// app.use('/recipes', customMiddleware)

// app.use("/recipes", customMiddleware);


// ROUTES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/logout', (req, res) => {
  req.session.username = null;
  req.session.loggedinat = null;
  res.redirect('/login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  // check if the username & password match 
  let {username, password} = req.body;
  if (!users[username]) {
    // register them
    const hash = bcrypt.hashSync(password, 2);
    users[username] = {username: username, password: hash};
    // setting a cookie
    console.log('Users', users);
    req.session.username = username;
    req.session.loggedinat = new Date();
    res.redirect('/recipes');
  } else {
    res.status(401).send("Username already registered");
  }
});

app.post('/login', (req, res) => {
  // check if the username & password match 
  let {username, password} = req.body;
  if (authenticateUser(username, password)) {
    // setting a cookie
    req.session.username = username;
    req.session.loggedinat = new Date();
    // redirect the user to recipes page
    res.redirect('/recipes');
  } else {
    res.status(401).send("Incorrect username or password");
  }
});

// BROWSE (all recipes)
// GET /recipes nobody
// GET /
app.get('/recipes', customMiddleware, setTemplateVars, (req, res) => {
  console.log('request to browse bread recipes', req.session.username);
  if (req.session.username && users[req.session.username]) {
    res.render("recipes", req.templateVars);
  } else {
    res.redirect('/login');
  }
})

app.get('/recipes/new', customMiddleware, (req, res) => {
  console.log('add a new recipe');
  res.render("add_recipe");
})

app.get('/recipes/:id/edit', (req, res) => {
  console.log('add a new recipe');
  const templateVars = {
    recipe: breadRecipes[req.params.id],
    id: req.params.id
  }
  res.render("edit_recipe", templateVars);
})

// READ (single recipe)
// GET /recipes/:id nobody
app.get('/recipes/:id', (req, res) => {
  console.log("params", req.params);
  console.log('request to read a bread recipe');
  res.send(req.params);
})

// EDIT
// PUT /recipes/:id <recipe>
// POST /recipes/:id <recipe>
app.post('/recipes/:id', (req, res) => {
  console.log('request to edit bread recipes', req.body, req.params);
  editRecipe(req.body, req.params.id);
  res.redirect("/recipes");
})

// ADD
// POST /recipes <recipe>
app.post('/recipes', (req, res) => {
  console.log('request to add bread recipes', req.body);
  // use the body to create a new recipe
  addRecipe(req.body);
  res.redirect("/recipes");
})

// DELETE
// DELETE /recipes/:id
// POST /recipes/:id/delete
app.post('/recipes/:id/delete', (req, res) => {
  console.log('request to delete bread recipes', req.params);
  deleteRecipe(req.params.id);
  res.redirect("/recipes");
})

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
})