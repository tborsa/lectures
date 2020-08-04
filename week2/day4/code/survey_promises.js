const readline = require('readline-promise').default;

const rlp = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Promise?
// agreement to do something later
// element of time to it
// fufill a promise or break a promise

const travisNewCoolPromises = {
  one: 1,
  two: 2,
  then: () => {return 5},
  catch: () => {},
};

const answers = [];

rlp.questionAsync('what\'s an activity you like doing?') //Returns a promise #1
  .then((res) => { // returns a promise #2
    // console.log('response one', res);
    answers.push(res);
    return rlp.questionAsync('what is your name?');//Returns a promise
  })
  .then(res => {
    answers.push(res);
    return rlp.questionAsync('what do you listen to while doing that? ');//Returns a promise
  })
  .then(res => {
    answers.push(res);
    return rlp.questionAsync('which meal is your favourite(dinner, brunch)? ');//Returns a promise
  })
  .then(res => {
    answers.push(res);
    return rlp.questionAsync('whats your fav thing to eat for that meal?');//Returns a promise
  })
  .then(res => {
    answers.push(res);
    console.log("all the users answers are: ", answers);
  })
  .catch((err) => { // will run if async thing failed
    console.log("something went wrong");
  });

// Promise .then()

// // recursive call
// rl.question('what\'s an activity you like doing? ', (two) => {

//   rl.question('what do you listen to while doing that? ', (three) => {
        
//     rl.question('which meal is your favourite(dinner, brunch)? ', (four) => {

//       rl.question('whats your fav thing to eat for that meal? ', (five) => {
            
//         rl.question('which sport is your fav? ', (six) => {
              
//           rl.question('what is your superpower? in a few words, tell us what you are amazing at! ', (seven) => {
//             console.log(`The survey persons name is ${one} and that person likes to ${two}, and likes listening to ${three} while doing sports. The persons favourite meal is ${four} and loves eating ${five} for that meal. The persons absolute favourite sport is ${six}, and the persons superpower is ${seven}.`)                  
//             rl.close();
//           });
//         });
//       });
//     });
//   });
// });