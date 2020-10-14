const express = require('express');

module.exports = (helpers) => {
  const router = express.Router();

  router.get('/', (req, res) => {
    // do some logic
    // use the helper function
    helpers.getAnimals()
      .then(animals => {
        res.json({animals: animals});
      })
  })
  
  router.get('/new', (req, res) => {
    console.log('do we get here');
    // do some logic
    // 
    res.render('new', {stuff: 1});
  })

  router.post('/', (req, res) => {
    console.log('req.body', req.body);
    helpers.addAnimal(req.body)
      .then(() => {
        res.redirect('/animals');
      })
  })

  router.get('/:id', (req, res) => {
    // do some logic
    // use the helper function
    helpers.getAnimal(req.params.id)
      .then(animal => {
        res.render('show', {animal: animal})
      })
  })
  

  return router;
}
