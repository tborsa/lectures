const readline =  require('readline-promise').default;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = ["question1", "question 2", "question 3", "question 4"];

const askQuestion = (questions) => {
  let answer;
  if (questions.length > 0) {
    return rl.questionAsync(questions[0])
      .then((result) => {
        let nextQuestions;
        if (<correct answer logic>) {
          //set answer and ask next question
          answer = result;
          nextQuestions = questions.slice(1);
        } else {
          // ask same question again
          nextQuestions = questions;
        }
        return askQuestion(nextQuestions);
      })
      .then(recievedAnswers => {
        if (answer) {
          return [answer, ...recievedAnswers];
        } else {
          return [...recievedAnswers];
        }
      });
  } else {
    return Promise.resolve([]);
  }
};

askQuestion(questions)
  .then(answers => {
    console.log(answers);
  });
