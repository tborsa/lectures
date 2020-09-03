history.replaceState(null, null, 'hello');



'use strict';

$(document).ready(() => {

  const ROOT_URL = 'https://pokeapi.co/api/v2/';

  //=========UPDATE DOM ===>
  const updatePokedex = (pokemon) => {
    console.log(pokemon)
    $(".pokedex .screen img").attr("src", pokemon.image);
    $(".pokedex header h2").text(pokemon.description);
    $(".pokedex footer p").text(pokemon.name);
  };

  //=========AJAX REQUEST ===>
  const getPokemon = (search) => {
    let pokemon = {name: '', description: '', image: ''};
    $.ajax({url: `${ROOT_URL}pokemon/${search}`})
      .then((res)=>{
        pokemon.name = res.name;
        pokemon.image = res.sprites.front_default;
        const speciesUrl = response.species.url;
        return $.ajax({url: speciesUrl });
      })
      .then((descRes)=>{
        pokemon.description = descRes.flavor_text_entries[2].flavor_text;
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
// <form id="search">
// <input id="search-input"/>
// <input type="submit" value="search"/>

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