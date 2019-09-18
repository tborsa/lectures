const express = require('express');
const router = express.Router();

module.exports = (dataHelpers) =>{
  router.get('/',(req, res)=>{
    //get a list of all pokemon
    dataHelpers.getAllPokemon()
      .then((pokemons)=>{
        res.render('index', {pokemons: pokemons});
      });
  });

  router.get('/new', (req,res)=>{
    res.render('new');
  });

  router.get('/:number',(req, res)=>{
    //get a list of all pokemon
    dataHelpers.getPokemon(req.params.number)
      .then((pokemon)=>{
        // res.json(pokemon);
        res.render('show', {pokemon: pokemon});
      }).catch(()=>{
        //send to an error page
      });
  });

  router.post('/', (req,res)=>{
    dataHelpers.createPokemon(req.body)
      .then(()=>{
        res.redirect('/pokemon');
      });
  });

  return router;
};