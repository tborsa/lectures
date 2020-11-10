const express = require('express');
const bodyParser = require('body-parser');

const {breadRecipes, addRecipe, deleteRecipe, editRecipe} = require('./data-helpers');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs'); // combine data + html
app.use(bodyParser.urlencoded());
// const breadRecipes = dataHelpers.breadRecipes;

//Bread recipe fetcher
// BREADITOR
// Resource is bread recipe && users

// ROUTES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// BREAD

// BROWSE (all recipes)
// GET /recipes nobody
// GET /
app.get('/recipes', (req, res) => {
  console.log('request to browse bread recipes');
  const templateVars = {
    appName: 'breaditor',
    recipes: breadRecipes
  }
  res.render("recipes", templateVars);
})

app.get('/recipes/new', (req, res) => {
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