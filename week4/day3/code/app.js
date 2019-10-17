
$(document).ready(()=>{
  //==> localhost:8080
  const path = "https://pokeapi.co/api/v2/";

  const updatePokedex = (pokemon) => {
    $(".name").text(pokemon.name);
    $(".description").text(pokemon.description);
    $(".image").attr('src', pokemon.image);
  };

  const getPokemon = (search) => {
    console.log(search);
    let pokemon = {name: 'MISSIG.NO', description: 'unknown', image: 'https://ih1.redbubble.net/image.16601072.6773/pp,650x642-pad,750x1000,f8f8f8.u2.jpg'};
    if(isNaN(search)){
      $('.pokedex').removeClass('unidentified');
    }else{
      $('.pokedex').addClass('unidentified');
    }
    $.ajax({ url: `${path}pokemon/${search}`})
      .then((res)=>{
        if(isNaN(search)){
          pokemon.name = res.name;
        }
        pokemon.image = res.sprites.front_default;
        return $.ajax({url: `${path}characteristic/${res.id}`})
      })
      .then((secondRes)=>{
        pokemon.description = secondRes.descriptions[secondRes.descriptions.length - 1].description;
        updatePokedex(pokemon);
      })
      .fail((error) => {
        updatePokedex(pokemon);
      });

  };
  $(".find").submit((event) => {
    event.preventDefault();
    const search = $("#search").val();
    getPokemon(search);
  });

  getPokemon(12);

});