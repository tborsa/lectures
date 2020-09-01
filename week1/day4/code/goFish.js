// GO FISH!

// 🌊🌊🌊🚣‍♂️🌊🌊🌊🌊🌊🌊
// 🦞xx🐟🐠🥡🦞🐡🥡🐟🐠

// .
// You Caught ...
// 🎣 🐠
// .

// the different types of 'fish' that can appear in the water.
const fishOptions = ['🐟','🐟','🐠','xx','🥡 ','🐡','🦞 ','🐚'];
// an array of fish that have been added to the water (starts empty)
const fishInWater = [];

// generate a rancom number from 0 to range
const randomNumber = (range) => {
  return Math.round(Math.random() * range);
};

// uses fishOptions and random number to return a random fish
// also adds the fish to fishInWater so we remember what fish have been picked
const getRandomFish = () => {
  const fish = fishOptions[randomNumber(fishOptions.length - 1)];
  fishInWater.push(fish);
  return fish;
};

// return a boat if it is the square the user wants to fish on
// return a ocean otherwise
const getOcean = (cast, oceanSquare) => {
  if (cast === oceanSquare) {
    return '🚣‍♂️';
  } else {
    return '🌊';
  }
};

// do a thing/function/behaviour x number of times
const printXTimes = (behaviour, times, cast) => {
  console.log('first');
  for (let i = 0; i < times; i++) { // 0,1,2,3,4,5 ... times
    process.stdout.write(behaviour(cast, i));
  }
  console.log('');
};

// get user input
const cast = process.argv[2] - 1;
// const length = process.argv[3];

printXTimes(getOcean, 9, cast);
printXTimes(getRandomFish, 9, cast);

// print the result
console.log(".");
console.log("You Caught ...");
console.log("🎣 ", fishInWater[cast]);
console.log(".");

