module.exports = (db) =>{
  const getAllPokemon = () =>{
    return db.query(`SELECT * FROM pokemons;`)
      .then((response)=>{
        return response.rows;
      });
  };
  const getPokemon = (number) =>{
    return db.query(`SELECT * FROM pokemons WHERE number = $1;`, [number])
      .then((response)=>{
        return response.rows[0];
      }).catch(()=>{
        return {error: "error"};
      });
  };
  const createPokemon = (pokemon) =>{
    return db.query(`INSERT INTO pokemons (name, type, number) VALUES ($1, $2, $3);`, [pokemon.name, pokemon.type, pokemon.number])
      .then((response)=>{
        return response.rows[0];
      }).catch(()=>{
        return {error: "error"};
      });
  };
  return {
    getAllPokemon: getAllPokemon,
    getPokemon: getPokemon,
    createPokemon
  };
};



