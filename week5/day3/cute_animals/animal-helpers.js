
module.exports = (db) => {
  
  const getAnimal = (id) => {
    return db.query(`SELECT * FROM animals WHERE id = $1;`, [id])
    .then((res) => {
      return res.rows[0];
    })
  };
  
  const getAnimals = () => {
    return db.query('SELECT * FROM animals;')
      .then((res) => {
        return res.rows;
      })
  };

  const addAnimal = (animal) => {
    return db.query('INSERT INTO animals (name, species, group_name, cuteness, region, picture) VALUES ($1, $2, $3, $4, $5, $6);', [animal.name, animal.species, animal.group_name, animal.cuteness, animal.region, animal.picture])
  };
  
  return {
    getAnimal, 
    getAnimals,
    addAnimal
  }
}
