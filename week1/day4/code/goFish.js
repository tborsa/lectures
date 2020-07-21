
const fishOptions = ['xx','🐟','🐠','🐟','🥡 ','🐡','🦞 ','🐚'];
const fishInWater = [];

const randomNumber = (range) => {
  return Math.floor(Math.random() * range);
};

// const distributedRandomNumber = (range) => {
//   return Math.floor((randomNumber(range) + randomNumber(range)) / 2);
// }

const printFish = (number) => {
  const fish = fishOptions[number];
  fishInWater.push(fish);
  process.stdout.write(fish);
};

const printRandomFish = () => {
  const number = randomNumber(fishOptions.length);
  printFish(number);
};

const printOcean = (cast, i) => {
  if (cast == i) {
    process.stdout.write('🚣‍♂️');
  } else {
    process.stdout.write('🌊');
  }
};

const printResults = (cast) => {
  console.log('.');
  console.log('You Caught ...');
  console.log('🎣' + fishInWater[cast]);
  console.log('.');
};

const doXTimes = (times, data, callback) => {
  for (let i = 0; i < times; i++) {
    callback(data, i);
  }
  console.log('');
};


const cast = process.argv[2]; //=> 1,2,3,4,5,6
// const size = process.argv[3];
// const difficulty = process.argv[4];

doXTimes(10, cast, printOcean);
doXTimes(10, cast, printRandomFish);

printResults(cast);