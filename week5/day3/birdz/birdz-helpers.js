
module.exports = (dbClient) => {

  const getAllBirdz = () => {
    return dbClient.query(`SELECT * FROM birdz;`)
      .then(res => {
        return res.rows;
      })
      .catch(() => {
        return false;
      });
  };
  const getBirdz = (name) => {
    return dbClient.query(`SELECT * FROM birdz WHERE name = $1;`, [name])
      .then(res => {
        return res.rows[0];
      })
      .catch(() => {
        return false;
      });
  };
  const removeBirdz = (id) => {
    return dbClient.query(`DELETE FROM birdz WHERE id = $1;`, [id])
      .then(res => {
        return true;
      })
      .catch(() => {
        return false;
      });
  };


  return {
    getAllBirdz,
    getBirdz,
    removeBirdz
  };
};