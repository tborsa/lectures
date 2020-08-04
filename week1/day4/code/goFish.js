// GO FISH!

// 🌊🌊🌊🚣‍♂️🌊🌊🌊🌊🌊🌊
// 🦞xx🐟🐠🥡🦞🐡🥡🐟🐠

// .
// You Caught ...
// 🎣xx
// .

// check if input matches a fish/thing
// tell them what they have caught 
// print the number of fish to guess ex 10 fish x
// get the input from user x
// print ocean x
  // sometimes print ocean
  // sometimes print fisher

const fishOptions = ['🐟','🐟','🐠','xx','🥡 ','🐡','🦞 ','🐚'];
const fishInWater = [];

const randomNumber = (range) => {
  return Math.floor(Math.random() * range);
};

const printFish = (number) => {
  const fish = fishOptions[number];
  fishInWater.push(fish);
  process.stdout.write(fish);
};

const printOcean = (index, userInput) => {
  // call 1 scope: index, userInput + scope of doXtimes call 1  + global
  if (index === userInput) {
    process.stdout.write("🚣‍♂️");
  } else {
    process.stdout.write("🌊");
  }
};

const printRandomFish = () => {
  const number = randomNumber(fishOptions.length);
  printFish(number);
};

const doXTimes = (times, callback, userInput) => {
  // call 1 scope: times, callback, userInput  + global
  for (let i = 0; i < times; i ++) {
    callback(i, userInput);
  }
};

let userInput = (process.argv[2] - 1);
doXTimes(10, printOcean, userInput); //function call 1
console.log('');
doXTimes(10, printRandomFish, userInput); // function call 2
console.log('');

const match = fishInWater[userInput];
console.log('✨');
console.log(`You Caught! : ${match}`);
console.log('✨');

