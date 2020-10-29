const fishOptions = ['xx','🐟','🐠','🐟','🥡 ','🐡','🦞 ','🐚'];
const fishInWater = [];
// 🌊🚣‍♀️🌊🌊🌊🌊🌊🌊🌊
// 🐠🐟🥡🐠🐟🥡🐠🐟🥡
// you caught 🎣🐟

// returns a random number from 0 -> max
const randomNumber = (max) => {
  return Math.floor(Math.random() * max);
}

// print the fish/underwater
// print fish tile
const printRandomFish = () => {
  // get random number between 0 and fish length
  const randomFishNumber = randomNumber(fishOptions.length)
  const fish = fishOptions[randomFishNumber];
  fishInWater.push(fish);
  process.stdout.write(fish);
}

// print the ocean
// print an ocean tile
const printOcean = (input, currentPosition) => {
  if ((input - 1) == currentPosition) {
    process.stdout.write('🚣‍♀️');
  } else {
    process.stdout.write('🌊');
  }
}

// do this x number of times
// higher order function
const printTiles = (userInput, oceanWidth, printTile) => {
  for (let i = 0; i < oceanWidth; i ++) { // x 10
    // print tiles
    printTile(userInput, i);
  }
  console.log('');
}

const userInput = process.argv[2];
printTiles(userInput, 10, printOcean);
printTiles(userInput, 10, printRandomFish);

console.log('You caught 🎣:', fishInWater[userInput - 1]);

// print the result (what they caught)