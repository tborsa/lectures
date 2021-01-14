// Fun Profile Generator - W2D2 Challenge 
// https://web.compass.lighthouselabs.ca/days/w02d2/activities/867

readline = require('readline-promise').default

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// when we have many async things we have to do in order risk of callback hell
// forcing synchronous execution

const answers = [];

const askAndStore = (answer, question) => {
  if(answer){
    answers.push(answer);
  }
  if (question) {
    rl.questionAsync(question) // promise
  } else {
    console.log('answers', answers);
    rl.close();
  }
}

promisequestion1
  .then((answer) => {
    return askAndStore(answer,'what\'s an activity you like doing? ') //returns promise question 2
  })
  .then((answer) => askAndStore(answer,'which meal is your favourite(dinner, brunch)? '))
  .then((answer) => askAndStore(answer,'whats your fav thing to eat for that meal? '))
  .then((answer) => askAndStore(answer,'which sport is your fav? '))
  .then((answer) => askAndStore(answer))
  .catch((err) => {
    console.log('somethign went wrong');
  })

  

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