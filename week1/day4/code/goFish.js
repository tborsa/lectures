const fishOptions = ['xx','🐟','🐠','🐟','🥡','🐡','🦞','🐚'];

// node goFish.js 2

// 🌊🚣‍♀️🌊🌊🌊🌊🌊🌊🌊
// 🐠🐟🥡🐠🐟🥡🐠🐟🥡
// you caught 🎣🐟

const fishLayer = [];

const randomNumber = (range) =>{
  return Math.floor(Math.random() * range);
}

// print the underwater
// print a fish tile do x times
// remember in an  array
const printFish = () => {
  // randomly select a fish from the fish options and print it
  const randomFish = fishOptions[randomNumber(fishOptions.length-1)];
  fishLayer.push(randomFish);
  process.stdout.write(randomFish);
}

// print ocean
// print an ocean tile do x times
// need a user input to ask user what boat
const printOcean = (userInput, index) => {
  if (userInput === index) {
    process.stdout.write('⛵');
  } else {
    process.stdout.write('🌊');
  }
}


const printRow = (userInput, oceanWidth, tilePrinter) => {
  for (let i = 0; i < oceanWidth; i++) {
    // print a tile
    tilePrinter(userInput, i);
  }
  console.log('');
};

// display outcome
const userInput = process.argv[2] - 1; //2
printRow(userInput,8,printOcean);
printRow(userInput,8,printFish);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('you caught 🎣' + fishLayer[userInput]);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// repeat