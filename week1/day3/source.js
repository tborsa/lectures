
const createArtists = function(name, genre) {
  let artist = {};
  artist.name = name;
  artist.genre = genre;
  return artist;
};

let kendrick = createArtists('kendrick lamar', 'rap');

const createAlbum = function(name, year) {
  let album = {name: name, year: year};
  return album;
};

const artistDetails = function(artist, field) {
  console.log(`the ${field} of ${artist.name} is `, artist[field]);
};

const addAlbumToArtist = function(artist, album) {
  if (!artist.albums) {
    artist.albums = [];
  }
  artist.albums.push(album);
};

let damn = createAlbum('DAMN', 2018);

addAlbumToArtist(kendrick, damn);

console.log(kendrick);

artistDetails(kendrick, 'albums');

//change add artist and artists details to be methods of artist