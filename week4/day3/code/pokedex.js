// hey this is some text

$(document).ready(() => {

  const url = 'https://pokeapi.co/api/v2';

  //update the pokedex dom
  const updatePokedex = (pokemon) => {
    $('.pokedex h2').text(pokemon.name);
    $('.pokedex p').text(pokemon.description);
    $('.screen img').attr('src', pokemon.image);
  };

  //gets the new pokemon data
  const getPokemon = (search) => {
    let pokemon = { name: 'MissingNo.', description: '?????', image: 'https://vignette.wikia.nocookie.net/brokenpkmn/images/1/1a/MissingNo.jpg'} 
    $.ajax({url: `${url}/pokemon/${search}`})
      .then((response) => {
        console.log(response);
        pokemon.name = response.name;
        pokemon.image = response.sprites.front_default;
        const speciesEndpoint = response.species.url;
        return $.ajax({url: speciesEndpoint});
      })
      .then((speciesRes) => {
        pokemon.description = speciesRes.flavor_text_entries[2].flavor_text;
        if (Number(search)) {
          pokemon.name = '?????';
          pokemon.description = "?????";
          $('.pokedex').addClass("unidentified");
        } else {
          $('.pokedex').removeClass("unidentified");
        }
        updatePokedex(pokemon);
      })
      .catch((err) => {
        updatePokedex(pokemon);
      });

  };

  $('.pokedex form').submit((event) => {
    event.preventDefault();
    let search = $('#search').val();
    console.log("here", search);
    getPokemon(search);
  });
  
  getPokemon(25);

});