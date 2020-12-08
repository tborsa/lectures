// BROWSE
app.get('/passwords',  (req, res) => {
  const passwords = dataHelpers.getPasswords('test@gmail.com');
  const templateVars = {passwords: passwords, test: 'this is for test'};
  res.render('index', templateVars);
})

// NEW
app.get('/passwords/new', (req, res) => {
  res.render('new', {});
});

// pattern matching routes /passwords/***
app.get('/passwords/:id', (req, res) => {
  const passwordId = req.params.id;
  const password = dataHelpers.getPassword(passwordId);
  if (!password) {
    res.send('no password found', 404);
  } else {
    const templateVars = {
      password: password,
    };
    res.render('show', templateVars);
  }
})

// Create/ADD
app.post('/passwords', (req, res) => {
  const success = dataHelpers.addPassword(req.body);
  if (success) {
    res.redirect('/passwords');
  } else {
    res.send("could not add password", 500);
  }
})

// Create/ADD
app.post('/passwords/:id/delete', (req, res) => {
  const success = dataHelpers.removePassword(req.params.id);
  if (success) {
    res.redirect('/passwords');
  } else {
    res.send("could not delete password", 500);
  }
})

module.exports = router;