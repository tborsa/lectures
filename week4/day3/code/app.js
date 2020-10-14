$(document).ready(() => {

  const ROOTURL = 'https://pokeapi.co/api/v2/';
  // everything in here runs after the page has loaded
  const updatePokedex = (pokemon) => {
    // update the dom
    $('.pokedex header h1').text(pokemon.name);
    $('.pokedex footer p').text(pokemon.description);
    $('.pokedex .screen img').attr('src', pokemon.image);
  };
  
  const getPokemon = (search) => {
    const pokemon = {name: '?????', description: 'n/a'};
    $.ajax({url: `${ROOTURL}pokemon/${search}`})
      .then((res) => {
        if (!$.isNumeric(search)) {
          pokemon.name = res.name;
          $('.pokedex .screen img').removeClass('unidentified');
        } else {
          $('.pokedex .screen img').addClass('unidentified');
        }
        pokemon.image = res.sprites.front_default;
        return $.ajax({url: res.species.url})
      })
      .then((res) => {
        if (!$.isNumeric(search)) {
          pokemon.description = res.flavor_text_entries[0].flavor_text;
        }
        updatePokedex(pokemon);
      })
      .catch((err) => {
        pokemon.image = "https://wiki.p-insurgence.com/images/0/09/722.png";
        pokemon.name = "Missigno."
        updatePokedex(pokemon);
      })
  };

  $('.pokedex header form').submit(event => {
    event.preventDefault();
    const search = $('#pokemon-search').val();
    getPokemon(search);
    $('#pokemon-search').val('');
  })

  // trigger(dom event) to run get pokemon
  getPokemon('sandslash');

})