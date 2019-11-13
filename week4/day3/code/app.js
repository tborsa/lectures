$(document).ready(() => {

  const url = 'https://pokeapi.co/api/v2/';

  const updatePokedex = (pokemon) => {
    //{name: 'sadfsd', img: "image path", description: 'sdfsd'}
    $('.pokedex img').attr('src', pokemon.image);
    $('.pokedex h2').text(pokemon.name);
    $('.pokedex p').text(pokemon.description);
  };

  updatePokedex({name: 'eveee', image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png", description: "one fluffy guy"})

  const getPokemon = (search) => { //search either a # or pokemon nam e
    const pokemon = {name: 'missingNo.', description: "unknown", image: 'https://ih1.redbubble.net/image.16601072.6773/pp,650x642-pad,750x1000,f8f8f8.u2.jpg'}
    //test if search is a number or a string
    if (isNaN(search)) {
      $('.pokedex').removeClass('unidentified');
    } else {
      $('.pokedex').addClass('unidentified');
    }
    $.ajax({url: `${url}pokemon/${search}`})
      .then((response) => {
        console.log(response);
        pokemon.image = response.sprites.front_default;
        if (isNaN(search)) {
          pokemon.name = response.name;
        }
        //update pokemon
        return $.ajax({url: `${url}characteristic/${response.id}`});

      })
      .then((characteristic) =>{
        if (isNaN(search)) {
          pokemon.description = characteristic.descriptions[characteristic.descriptions.length - 1].description;
        }
        updatePokedex(pokemon);
      })
      .fail(() => {
        updatePokedex(pokemon);
      });
  };

  $('.pokedex form').submit((event) => {
    //search for a pokemon with AJAX
    event.preventDefault();
    const search = $("#search").val();
    console.log("HERE", search);
    getPokemon(search);
  });


});