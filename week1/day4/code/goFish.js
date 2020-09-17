// GO FISH!

// 🌊🌊🌊🚣‍♂️🌊🌊🌊🌊🌊🌊
// 🦞xx🐟🐠🥡🦞🐡🥡🐟🐠

// .
// You Caught ...
// 🎣 🐠
// .

// the different types of 'fish' that can appear in the water.
const fishOptions = ['🐟','🐟','🐠','xx','🥡 ','🐡','🦞 ','🐚'];
const printedFish = [];

// get random number
const randomNumber = () => {
  return Math.floor(Math.random() * fishOptions.length);
};

// print a random fish
const printRandomFish = () => {
  const fish = fishOptions[randomNumber()];
  printedFish.push(fish);
  process.stdout.write(fish);
};

// print some ocean 
const printOcean = (oceanCount, userInput) => {
  // when printUi runs print ocean what is the scope
  if (oceanCount == userInput) {
    process.stdout.write('🚣‍♀️');
  } else {
    process.stdout.write('🌊');
  }
};

// prints out ocean/fish some # of times
const printUI = (oceanWidth, userInput, UIFunction) => {
  for (let oceanCount = 1; oceanCount <= oceanWidth; oceanCount ++) {
    UIFunction(oceanCount, userInput);
  }
  console.log('');
};

const userInput = process.argv[2];

printUI(10, userInput, printOcean);
printUI(10, userInput, printRandomFish);

// given user Input the fish printed at user input space is?
console.log('~~~~~');
console.log("you caught... ", printedFish[userInput - 1]);
console.log('~~~~~');

// get input from user

// print the results
