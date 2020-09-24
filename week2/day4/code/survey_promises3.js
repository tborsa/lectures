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
        answer = result;
        const nextQuestions = questions.slice(1);
        return askQuestion(nextQuestions);
      })
      .then(recievedAnswers => {
        return [answer, ...recievedAnswers];
      });
  } else {
    return Promise.resolve([]);
  }
};

askQuestion(questions)
  .then(answers => {
    console.log(answers);
  });
