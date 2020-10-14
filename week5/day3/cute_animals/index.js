const express = require('express');
const app = express();
const PORT = 3000;
const bodyparser = require('body-parser');

// MIDDLEWARE
app.use(bodyparser.urlencoded({extended: true}));

// DB CONNECTION
const db = require('./db-connection');

// DB HELPERS (FUNCTIONS TO QUERY THE DB)
const animalHelpers = require('./animal-helpers')(db);
// const userHelpers = require('./users-helpers')(db);

// ROUTES
const animalRoutes = require('./animal-routes')(animalHelpers);
app.use('/animals', animalRoutes);

// const usersRoutes = require('./users-routes')(usersHelpers);
// app.use('/users', usersRoutes);

app.set('view engine', 'ejs');


app.listen(PORT, () => {
  console.log("App listening on port: ", PORT);
});
