const express = require('express');
const router = express.Router();

module.exports = (birdzHelpers) => {

  router.get('/', (req, res) => {
    birdzHelpers.getAllBirdz()
      .then((birdz) => {
        //do something with the birdz
        res.render('index' ,{birdz});
      });
  });
  router.post('/:id/delete', (req, res) => {
    birdzHelpers.removeBirdz(req.params.id)
      .then(() => {
        //do something with the birdz
        res.redirect('/birdz');
      })
      .catch(() => {
        res.json('COULD NOT DELETE');
      });
  });
  router.get('/:name', (req, res) => {
    birdzHelpers.getBirdz(req.params.name)
      .then((bird) => {
        //do something with the birdz
        res.render('show',{bird});
      });
  });

  return router;
};