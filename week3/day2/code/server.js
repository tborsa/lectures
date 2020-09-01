const express = require('express');
const bodyParser = require('body-parser');

const { questions, createQuestion } = require('./data-helpers');

const app = express();

const PORT = 3000;

// use sets up middleware, function that will be run before all requests
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});


// ORDER routes from most specific to least specific

// Routes
// GET /questions/:id/edit form to edit the question (UPDATE)
app.get('/questions/:id/edit', (request, response) => {
  // ejs html layout + data
  response.render('edit');
});

// GET /questions/new show the form to add a question (CREATE)
app.get('/questions/new', (request, response) => {
  // ejs html layout + data
  response.render('new');
});

// GET /questions/:id a question (READ)
app.get('/questions/:id', (request, response) => {
  // ejs html layout + data
  const questionId = request.params.id;
  let question = questions[questionId];
  response.render('show', {question: question, questionId: questionId});
});

// GET /questions all questions (BROWSE)
app.get('/questions', (request, response) => {
  // ejs html layout + data
  response.render('index', { questions: questions });
});



// POST /questions adding a questions (CREATE)
app.post('/questions', (request, response) => {
  // ejs html layout + data
  console.log("a user tried to add a new question");
  console.log('with the data', request.body);
  const newQuestionId = createQuestion(request.body);
  response.redirect(`/questions/${newQuestionId}`);
});

// (Answer)
app.post('/questions/:id/answer', (request, response) => {
  // ejs html layout + data
  const answer = request.body.answer;
  const questionId = request.params.id;
  const question = questions[questionId];
  if (question.answer === answer) {
    response.redirect(question.reward);
  } else {
    response.redirect('/questions');
  }
});

// PUT/POST /questions/:id/edit edits a question (UPDATE)
app.post('/questions/:id/edit', (request, response) => {
  // ejs html layout + data
});

// DELETE /questions delete a question (DELETE)
app.post('/questions/:id', (request, response) => {
  // ejs html layout + data
  console.log("User is trying to delete a question");
  const questionId = request.params.id;
  delete questions[questionId];
  response.redirect('/questions');
});
