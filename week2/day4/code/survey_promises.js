// Fun Profile Generator - W2D2 Challenge 


// What are promises?

// a statement yet to be fufilled
// an agreement or offer to do something later
// a commitment to do something
// an agreement between two or more parties
// involve some amount of time


// js
// agreement to do some async work
// Pending state 
//    -> resolved/fufilled
//    -> rejected/broken

const readline =  require('readline-promise').default;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

const askAndStore = (answer, question) => {
  if (answer) answers.push(answer);
  if (question) return rl.questionAsync(question);
};

askAndStore(null, 'what is your name')
  .then((result) => {
    return askAndStore(result, 'what\'s an activity you like doing?');
  })
  .then((result) => {
    return askAndStore(result, 'what do you listen to while doing that?');
  })
  .then((result) => {
    return askAndStore(result, 'question 4?');
  })
  .then((result) => {
    askAndStore(result);
    console.log('answers:', answers);
    rl.close();
  })
  .catch(() => { // single error handling for all promises
    console.log("promise rejected");
  });
