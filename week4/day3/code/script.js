

$(document).ready(() => {

  const ROOT_URL = "https://pokeapi.co/api/v2/";
  //Update the dom with our information
  const updatePokedex = (pokemon) => {
    $('.pokedex header h1').text(pokemon.name);
    $('.pokedex footer p').text(pokemon.description);
    $('.pokedex .screen img').attr('src', pokemon.image);
  };

  //Fetch pokemon information AJAX
  const getPokemon = (search) => {
    let pokemon = {name: 'Missingo', image: 'https://vignette.wikia.nocookie.net/mcleodgaming/images/d/d8/MissingNo..png/revision/latest?cb=20131108185400', description: '?????'};
    if ($.isNumeric(search)) {
      $('.pokedex .screen img').addClass('unidentified');
    } else {
      $('.pokedex .screen img').removeClass('unidentified');
    }
    $.ajax({url: `${ROOT_URL}pokemon/${search}`})
      .then((res) => {
        pokemon.name = res.name;
        if ($.isNumeric(search)) {
          pokemon.name = '????'
        }
        pokemon.image = res.sprites.front_default;
        const speciesUrl = res.species.url;
        return $.ajax({url: speciesUrl});
      })
      .then((res) => {
        pokemon.description = res.flavor_text_entries[0].flavor_text;
        console.log('pokemon', pokemon);
        updatePokedex(pokemon);
      })
      .fail((err) => {
        updatePokedex(pokemon);
      });
  };

  getPokemon(45);

  $("#search-form").submit(event => {
    event.preventDefault();
    const search = $("#search-field").val();
    console.log('seach', search);
    getPokemon(search);
  });

});