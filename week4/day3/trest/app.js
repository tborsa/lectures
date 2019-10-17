$(document).ready(()=>{

  const path = 'https://pokeapi.co/api/v2/';

  const updatePokedex = (pokemon)=> {
    console.log(pokemon);
    $('#image').attr('src', pokemon.image);
    $('#name').text(pokemon.name);
    $('#description').text(pokemon.description);
  }

  const getPokemon = (search)=>{
    let pokemon = {name: '????', description: "unknown", image: ""};
    if (isNaN(search)) {
      $('.pokedex').removeClass('unidentified');
    } else {
      $('.pokedex').removeClass('unidentified');
    }
    $.ajax({url: `${path}pokemon/${search}`})
      .then((res)=>{
        pokemon.name = res.name;
        pokemon.image = res.sprites.front_default;
        return $.ajax({url: `${path}characteristic/${res.id}`})
      })
      .then((charRes)=>{
        console.log(charRes);
        pokemon.description = charRes.descriptions[0].description;
        updatePokedex(pokemon);
      })
      .fail((err)=>{
        updatePokedex(pokemon);
      });
  };

  $('#find').submit((event)=>{
    event.preventDefault();
    const search = $('#search').val();
    getPokemon(search);
  })

  getPokemon(25);

});