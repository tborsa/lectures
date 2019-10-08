history.replaceState(null, null, 'hello');



'use strict';

$(document).ready(() => {

  const ROOT_URL = 'https://pokeapi.co/api/v2/';

  //=========UPDATE DOM ===>
  const updatePokedex = (pokemon) => {
    console.log(pokemon)
    $("#image").attr("src", pokemon.image);
    $("#description").text(pokemon.description);
    $("#name").text(pokemon.name);
  };

  //=========AJAX REQUEST ===>
  const getPokemon = (search) => {
    let pokemon = {};
    $.ajax({url: `${ROOT_URL}pokemon/${search}`, headers: {'Access-Control-Allow-Origin': '*'}})
      .then((res)=>{
        pokemon.name = res.name;
        pokemon.image = res.sprites.front_default;
        return $.ajax({url: `${ROOT_URL}characteristic/${res.id}` , headers: {'Access-Control-Allow-Origin': '*'}});
      })
      .then((descRes)=>{
        pokemon.description = descRes.descriptions[descRes.descriptions.length - 1 ].description;
        updatePokedex(pokemon);
      })
      .fail((err)=>{
        pokemon.name = '????';
        updatePokedex(pokemon);
      });
  };
 
  $("#find").submit((event)=>{
    event.preventDefault();
    getPokemon($("#search").val());
  });
  
  getPokemon(25);
  
});

//=========ADD CAUGHT POKEMON ========>

const buildCaughtHTML = (pokemon) => {
  let img = $(document.createElement('img'));
  img.attr('src', pokemon.image);
  return img;
};

const addPokemon = (pokemon) =>{
  const caught = $('.caught');
  // append each article into the element
  caught.append(buildCaughtHTML(pokemon));
};