// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const readline =  require('readline-promise').default;
const answers = [];
const questions = ["question1", "question 2", "question 3", "question 4"];
let currentQuestion = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askAndStore = (answer) => {
  if (answer) answers.push(answer);
  if (currentQuestion + 1 < questions.length) {
    currentQuestion ++;
    return rl.questionAsync(questions[currentQuestion - 1]);
  } else {
    console.log('answers', answers);
  }
};

askAndStore(null, 'what is your name')
  .then(askAndStore)
  .then(askAndStore)
  .then(askAndStore)
  .then(askAndStore)
  .catch(() => { // single error handling for all promises
    console.log("promise rejected");
  });
