
const readline = require('readline-promise').default;

const rlp = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

let bar = null;

let questionLookup = [
    'what is your name?',
    'what\'s an activity you like doing? ',
    'what do you listen to while doing that? '
]
let questionPosition = 0;

let askQuestion = (answer) => {
    if (answer) {
        console.log('you answered:', answer);
    }
    if (questionPosition === questionLookup.length) {
        // print all answers nicely together
        rlp.close();
    } else {
        questionPosition ++;
        return rlp.questionAsync(questionLookup[questionPosition - 1]);
    }
}

// askQuestion()
//     .then(askQuestion)
//     .then(askQuestion)
//     .then(askQuestion)
//     .catch(err => {
//         console.log('something went wrong', err);
//     })

let answers = [];

// how do we do two promises in order
// How many promises are there?
//then and catch are methods of a promsie

// <THING>.then then <THING> must be a promise

rlp.questionAsync('what is your name?') // promise 1
    .then(answer => {
        // know that the question will have been answered
        answers.push(answer);
        console.log('your name is:', answer);
        return rlp.questionAsync('what\'s an activity you like doing? '); //promise 2
    }) 
    .then(answer => {
        answers.push(answer);
        console.log('your favourite hobby is:', answer);
        return rlp.questionAsync('what do you listen to while doing that? ') //promise 3
    }) 
    .then(answer => {
        answers.push(answer);
        console.log('music:', answer);
        console.log(`The survey persons name is ${answers[0]} and that person likes to ${answers[1]}, and likes listening to ${answers[2]} while doing sports.`)                  
    }) 
    .catch(err => {
        console.log('something went wrong', err);
    }) 

// when we have many async things we have to do in order risk of callback hell
// forcing synchronous execution

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



const promise1 = rlp.questionAsync('what is your name?') 
const promise2 = promise1.then(answer => {
        answers.push(answer);
        console.log('your name is:', answer);
        const promise6 = rlp.questionAsync('what\'s an activity you like doing? ');
        return promise6;
    }) 
const promise3 = promise2.then(answer => {
        answers.push(answer);
        console.log('your favourite hobby is:', answer);
        const promise7 =  rlp.questionAsync('what do you listen to while doing that? ') ;
        return promise7;
    }) 
const promise4 = promise3.then(answer => {
        answers.push(answer);
        console.log('music:', answer);
        console.log(`The survey persons name is ${answers[0]} and that person likes to ${answers[1]}, and likes listening to ${answers[2]} while doing sports.`)                  
    }) 
const promise5 = promise4.catch(err => {
        console.log('something went wrong', err);
    }) 