const express = require('express');
const app = express();
const PORT = 3000;
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT }`);
});

// CREATE BASE DATA AND SQL FILE
DROP TABLE IF EXISTS pokemons;
DROP TABLE IF EXISTS regions;
DROP TABLE IF EXISTS trainers;

CREATE TABLE pokemons (
  id SERIAL PRIMARY KEY,
  type VARCHAR(32),
  name VARCHAR(50),
  region_id INTEGER, 
  gender VARCHAR(20),
  number INTEGER
);

INSERT INTO pokemons
  (type, name, number)
VALUES
  ('grass', 'bulbasaur', 1),
  ('rock', 'tyranitar', 241),
  ('ice', 'Articuno', 144);
  
//============= add pg connection================//
const db = require('./pg-connection.js');
//other file
const { Client } = require('pg');
require('dotenv').config();
// add .env
// PGHOST=localhost
// PGUSER=travisborsa
// PGDATABASE=pokemon
const client = new Client({
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST
});

client.connect(() => {
  console.log('connected to db');
});

module.exports = client;

//============= add data helpers================//
const DataHelpers = require("./data-helpers.js")(db);
//other file
module.exports = (db)=>{

  const getAllPokemon = ()=>{
    return db.query('SELECT * FROM pokemon;')
      .then((res)=>{
        return res.rows;
      });
  };
  const getPokemon = (id)=>{
    return db.query('SELECT * FROM pokemon WHERE number = $1;', [id])
      .then((res)=>{
        return res.rows;
      });
  };
  const deletePokemon = (id)=>{
    return db.query('DELETE FROM pokemon WHERE number = $1;', [id])
      .then((res)=>{
        return res.rows;
      });
  };
  const addPokemon = (data)=>{
    return db.query('INSERT INTO POKEMON (name, number, description) VALUES ($1, $2, $3);', [data.name, data.number, data.description])
      .then((res)=>{
        return res.rows;
      });
  };

  return {
    getAllPokemon,
    getPokemon,
    addPokemon,
    deletePokemon
  };
};

//============= add routes================//
const router = require('./pokemon-router.js')(DataHelpers);
app.use('/pokemon', router);
//other file
const express = require('express');
const router = express.Router();

module.exports = function(dataHelpers) {

  router.get('/', (req, res)=>{
    dataHelpers.getAllPokemon()
      .then((result)=>{
        console.log(result);
        res.json(result);
      });
  });
  
  router.get('/new', (req, res)=>{
    res.render('new');
  });

  router.post('/', (req, res)=>{
    console.log('creating');
    dataHelpers.addPokemon(req.body)
      .then((result)=>{
        console.log(result);
        res.redirect('/pokemon');
      });
  });

  router.post('/:id/delete', (req, res)=>{
    dataHelpers.deletePokemon(req.params.id)
      .then((result)=>{
        res.redirect('/pokemon');
      });
  });

  router.get('/:id', (req, res)=>{
    dataHelpers.getPokemon(req.params.id)
      .then((result)=>{
        console.log(result);
        res.render('show', {pokemon: result[0]});
      });
  });

  return router;
};


//=============extra format stuff================//
app.set('view engine', 'ejs');
