const express = require('express');
const PORT = 8080;
const bodyParser = require('body-parser');
const question1 = require('../questions/1.json');

const server = express();

//set ejs
server.set('view engine', 'ejs');

//Middleware
server.use(bodyParser.urlencoded());
server.use((req,res,next) => {
  console.log("New agent.");
  next();
});

server.use('/public', express.static('public'));

//ROUTES
server.get('/', (req, res) => {
  res.render('index');
});

server.get('/mission', (req, res) => {
  const templateVars = {name: "1", content: question1.question};
  res.render('mission', templateVars);
});

server.post('/answer', (req, res) => {
  if (req.body.answer.toLowerCase() === question1.answer) {
    res.send('for your reward go to ' + question1.reward);
  } else {
    res.send('Try again');
  }
});

server.listen(PORT, () => {
  console.log('Server Listening on ' + PORT);
});