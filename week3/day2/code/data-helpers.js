// DATA
const questions = {
  1: {
    question: "David's father has three sons : Snap, Crackle and _____ ?",
    answer:                                                                                   "david",
    reward: "/public/secret1234picture.jpeg"
  },
  2: {
    question: "I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
    answer:                                                                                   "fire",
    reward: "/public/secret4321picture.jpeg"
  },
  3: {
    question: "This is as light as a feather, yet no man can hold it for long. What am I?",
    answer:                                                                                   "breath",
    reward: "/public/secret5678picture.jpg"
  }
};


// HELPERS
const generateRandomID = () => Math.random().toString(16).slice(2, 8);

const addQuestion = (question) => {
  const id = generateRandomID();
  questions[id] = question;
  return id;
};

const getQuestions = (id) => {
  return questions[id];
};

module.exports = {
  addQuestion,
  getQuestions,
  questions
};