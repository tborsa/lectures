// DATA
const questions = {
  1: {
    text: "David's father has three sons : Snap, Crackle and _____ ?",
    answer:                                                                                   "david",
    reward: "https://en.bcdn.biz/Images/2018/6/6/ae2e9240-c42a-4a81-b6d8-ac65af25b827.jpg"
  },
  2: {
    text: "I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
    answer:                                                                                   "fire",
    reward: "https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg"
  },
  3: {
    text: "This is as light as a feather, yet no man can hold it for long. What am I?",
    answer:                                                                                   "breath",
    reward: "https://happyserpent.com/wp-content/uploads/2019/07/shiny-cute-hognose-snake.jpg"
  }
};

// CRUD / BREAD
// create a question
// Read a question
// update a question
// delete a question

// answer a question.

// HELPERS
const generateRandomID = () => Math.random().toString(16).slice(2, 8);

const createQuestion = (question) => {
  const newId = generateRandomID();
  questions[newId] = question;
  return newId;
};

module.exports = {
  questions,
  createQuestion
};