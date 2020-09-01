// when we have many async things we have to do in order risk of callback hell
// forcing synchronous execution

// Solution? Promises

// Promise
// - a Vow that you will do something.
// - Something that is intended to get done.
// - You can fufill or break a promise
// - commitment
// - Based on trust (something will happen)
// - time element involved (do something in the future)
// - agreement between one or more parties 

// js Promises
  // State (pending, fufilled, rejected)
  // Value (undefined, desired value, error)

// Fun Profile Generator - W2D2 Challenge 
// https://web.compass.lighthouselabs.ca/days/w02d2/activities/867

const readline = require('readline-promise').default;


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];
// Promise is always asynchronous, or waiting for somethign to be resolved rejected
rl.questionAsync('what is your name?')
  .then((result1) => { // result1 is the resolved value of the promise only run on success
    answers.push(result1);
    return rl.questionAsync('question 2?'); //this needs to run after the first question
  })
  .then((result2) => { // result2 is the resolved value of the promise only run on success
    answers.push(result2);
    return rl.questionAsync('question 3?'); // return any promise, return any value
  })
  .then((result3) => { // result3 is the resolved value of the promise only run on success
    answers.push(result3);
    return rl.questionAsync('question 4?'); // return any promise, return any value
  })
  .then((result4) => { // result4 of question 2
    answers.push(result4);
    console.log("all the answers ", answers);
    rl.close();
  })
  .catch((error) => { // run if the promise is rejected/ fails or if there is an error in the handlers
    console.log("something went wrong", error);
  });

console.log('this will be run before the promise finishes v');


// rl.question('what is your name?', (one) => {
//   // recursive call
//   rl.question('what\'s an activity you like doing? ', (two) => {

//     rl.question('what do you listen to while doing that? ', (three) => {
          
//       rl.question('which meal is your favourite(dinner, brunch)? ', (four) => {

//         rl.question('whats your fav thing to eat for that meal? ', (five) => {
              
//           rl.question('which sport is your fav? ', (six) => {
                
//             rl.question('what is your superpower? in a few words, tell us what you are amazing at! ', (seven) => {
//               console.log(`The survey persons name is ${one} and that person likes to ${two}, and likes listening to ${three} while doing sports. The persons favourite meal is ${four} and loves eating ${five} for that meal. The persons absolute favourite sport is ${six}, and the persons superpower is ${seven}.`)                  
//               rl.close();
//             });
//           });
//         });
//       });
//     });
//   });
// });