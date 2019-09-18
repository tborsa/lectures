const express = require('express');
const bodyparser = require('body-parser');
const db = require('./database-connection');
const dataHelpers = require('./data-helpers.js')(db);
const routes = require('./pokemon-routes.js')(dataHelpers);

const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use(bodyparser.urlencoded({extended: false}));
app.use('/pokemon', routes);

app.listen(PORT, ()=>{
  console.log(`Server listening on port ${PORT}`);
});

