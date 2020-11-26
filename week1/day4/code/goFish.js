const fishOptions = ['xx','🐟','🐠','🐟','🥡 ','🐡','🦞 ','🐚'];

// 🌊🚣‍♀️🌊🌊🌊🌊🌊🌊🌊
// 🐠🐟🥡🐠🐟🥡🐠🐟🥡
// you caught 🎣🐟

const fishInWater = [];

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * (max + 1));
}

// print out the fish layer
const printRandomFish = () => {
  const randomNumber = getRandomNumber(7);
  let fish = fishOptions[randomNumber];
  fishInWater.push(fish);
  process.stdout.write(fish);
}

// print out the ocean layer
const printOcean = (tilePosition, userInput) => {
  if (tilePosition == userInput) {
    process.stdout.write("🚣‍♀️");
  } else {
    process.stdout.write("🌊");
  }
}

// (boat or ocean)* number of tiles
// print a random fish * number of tiles
const printUi = (oceanSize, userInput, tilePrint) => {
  for (let i = 1; i <= oceanSize; i++) {
    tilePrint(i, userInput);
  }
  console.log('');
}

const userInput = process.argv[2];
printUi(10, userInput, printOcean);
printUi(10, userInput, printRandomFish);

// print the result
// get user input
console.log('**~~~~~~~~~~~~~~~~~~**');
console.log('you caught 🎣', fishInWater[userInput - 1]);
console.log('**~~~~~~~~~~~~~~~~~~**');

// validate user input
  // give a nice message

// Object for fish so we can store more information

// store what fish you have caught

// each fish score value

// actions for certain fish (shark is a problem)

