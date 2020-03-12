// Fun Profile Generator - W2D2 Challenge 
// https://web.compass.lighthouselabs.ca/days/w02d2/activities/867

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('what is your name?', (one) => {

  rl.question('what\'s an activity you like doing? ', (two) => {

    rl.question('what do you listen to while doing that? ', (three) => {
          
      rl.question('which meal is your favourite(dinner, brunch)? ', (four) => {

        rl.question('whats your fav thing to eat for that meal? ', (five) => {
              
          rl.question('which sport is your fav? ', (six) => {
                
            rl.question('what is your superpower? in a few words, tell us what you are amazing at! ', (seven) => {
              console.log(`The survey persons name is ${one} and that person likes to ${two}, and likes listening to ${three} while doing sports. The persons favourite meal is ${four} and loves eating ${five} for that meal. The persons absolute favourite sport is ${six}, and the persons superpower is ${seven}.`)                  
              rl.close();    
            });
          });
        });
      });
    });
  });
});