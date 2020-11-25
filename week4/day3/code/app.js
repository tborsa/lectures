
$(document).ready(() => {

  const PATH = 'https://pokeapi.co/api/v2/pokemon/';

  // dynamically set the pokemon info to the dom
  const updatePokedex = (pokemon) => {
    // update the dom
    // query the page for name, image, description dom elements
    // set text or set the src attr
    $('.pokedex header h1').text(pokemon.name);
    $('.pokedex footer p').text(pokemon.description);
    $('.pokedex .screen img').attr('src', pokemon.image);
  }

  // get the data from the pokemon api
  // input: pokemon name or #
  const getPokemon = (input) => {
    const pokemon = {name: "Missingno.", image: "https://static.wikia.nocookie.net/mcleodgaming/images/d/d8/MissingNo..png/revision/latest?cb=20131108185400", description: "?????"};
    $.ajax(PATH + input)
      .then((response) => {
        pokemon.name = response.name;
        pokemon.image = response.sprites.front_default;
        return $.ajax(response.species.url)
      })
      .then(response => {
        pokemon.description = response.flavor_text_entries[1].flavor_text;
        conso
        if (Number(input)) {
          pokemon.name = "????";
          pokemon.description = "???",
          $('.pokedex .screen img').addClass('unknown');
        } else {
          $('.pokedex .screen img').removeClass('unknown');
        }
        updatePokedex(pokemon);
      })
      .catch((error) => {
        // error behaviour
        $('.pokedex .screen img').removeClass('unknown');
        updatePokedex(pokemon);
      })
  }

  $(".pokedex header form").submit((event) => {
    event.preventDefault();
    getPokemon($("#search").val());
  })

  getPokemon(29);

})