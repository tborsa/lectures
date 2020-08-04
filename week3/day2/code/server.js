const express = require('express');
const bodyParser = require('body-parser');
const {
  addQuestion,
  getQuestion,
  questions
} = require('./dataHelpers');

const app = express();
const PORT = 3000;

// whenever we call response.render('blah'),
// look for 'blah.ejs' in `views` folder
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true })); // this gives us req.body

// Server 2 server request:
// this server is making a request to google.com's server
// request.get('google.com', (err, response, body) => {
    
// })

// Express Middlewares: Routing + Controllers?
app.get('/questions', (request, response) => {
  response.render('index', { questions: questions });
});

app.get('/questions/new', (request, response) => {
  response.render('new');
});

app.post('/questions', (req, res) => {
  // Goal: Create Joke - save a new joke in our data storage
  // 1. get the submitted body of data from the request
  const dataFromUser = req.body;
  console.log('dataFromUser', dataFromUser);
  // 2. create the representation of a joke
  const newId = addQuestion(dataFromUser);

  // 4. respond to the request
  res.redirect(`/questions/${newId}`);
});


app.get('/questions/:id/edit', (request, response) => {
  const questionId = request.params.id;
  const question = getQuestion(questionId);
  response.render('edit', { question });
});

app.post('/questions/:id', (req, res) => {
  // Goal: Create Joke - save a new joke in our data storage
  // 1. get the submitted body of data from the request
  const editFromUser = req.body;
  const id = req.params.id;
  console.log('editFromUser', editFromUser);
  // updateQuestion(editFromUser);
  res.redirect('/questions/' + id);
});

app.get('/questions/:id', (request, response) => {
  // Goal is to show a page with full details about a joke
  // 1. Identify the joke that is being requested
  const questionId = request.params.id;
  const question = getQuestion(questionId);

  // 2. Render a joke template (ejs) with the joke data
  response.render('show', { question });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Listening on ${PORT}`);
});