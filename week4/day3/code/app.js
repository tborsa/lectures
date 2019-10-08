'use strict';

$(document).ready(() => {

  const ROOT_URL = 'https://pokeapi.co/api/v2/';

  const updatePokedex = (pokemon) => {
    console.log(pokemon)
    $("#image").attr("src", pokemon.image);
    $("#description").text(pokemon.description);
    $("#name").text(pokemon.name);
  };

  const getPokemon = (search) => {
    let pokemon = {};
    $.ajax({url: `${ROOT_URL}pokemon/${search}`, headers: {'Access-Control-Allow-Origin': '*'}})
    .then((res)=>{
      pokemon.name = res.name;
      pokemon.image = res.sprites.front_default;
      return $.ajax({url: `${ROOT_URL}characteristic/${res.id}` , headers: {'Access-Control-Allow-Origin': '*'}});
    })
    .then((descRes)=>{
      console.log(descRes)
      pokemon.description = descRes.descriptions[descRes.descriptions.length - 1 ].description;
        if (!isNaN(search)) {
          $(".pokedex").addClass('unidentified');
          pokemon.name = '????'
          updatePokedex(pokemon);
        }else{
          $(".pokedex").removeClass('unidentified');
          addPokemon(pokemon);
          updatePokedex(pokemon);
        }
      })
      .fail((err)=>{
        if (!isNaN(search) || !pokemon.image) {
          $(".pokedex").addClass('unidentified');
          pokemon.name = '????';
          updatePokedex(pokemon);
        }else{
          $(".pokedex").removeClass('unidentified');
          addPokemon(pokemon);
          updatePokedex(pokemon);
        }
      });
  };
 
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
  $("#find").submit((event)=>{
    event.preventDefault();
    getPokemon($("#search").val());
  });

  getPokemon(25);

});