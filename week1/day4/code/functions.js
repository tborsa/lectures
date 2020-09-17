// Higher Order Howdy~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function howdy(param) {
  console.log("hey there", param);
};

const howdyAgain = function(param) {
  console.log('hows it going again', param);
};

const howdyTheThird = (param) => {
  console.log("hey some more", param);
};

const funcCopy = howdyTheThird;

funcCopy.thing = "stuff";

const higherOrderHowdy = (howdyFunction) => {
  console.log('Howdy starting in 3, 2, 1...');
  // console.log("what is howdyFunction", howdyFunction);
  howdyFunction();
};

// higherOrderHowdy(howdy);
// higherOrderHowdy(howdyAgain);
// higherOrderHowdy(howdyTheThird);

// For Each~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let arr = ['dog','dino','snake',4,5];

const printNum = (num) => {
  console.log('printing: ', num);
};

const numSquared = (num) => {
  console.log('squared: ', num * num);
};

// s
// Assert Equal~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const assertEqual = (value1, value2, comparisonFunction) => {
  if (comparisonFunction(value1, value2)) {
    console.log('👍');
  } else {
    console.log('👎');
  }
};

// assertEqual([1,3,4], [1,3,4], eqArrays);
// assertEqual({one: 1}, {one: 1}, eqObjects);

// Class info ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


let classes = [
  {name: 'wizard', primaryAbility: 'intelligence'}, 
  {name: 'barbarian', primaryAbility: 'strength'}, 
  {name: 'bard', primaryAbility: 'charisma'}, 
  {name: 'rogue', primaryAbility: 'dexterity'}, 
  {name: 'druid', primaryAbility: 'wisdom'}
];

let printClassDetails = (charClass) => {
  console.log(charClass.name + ' primary ability is ' + charClass.primaryAbility);
};

// classes.forEach(printClassDetails);

// const forEach = (callback) {
//   for (let element of arr) {
//     callback(1, 2, 3);
//   }
// }


// classes.forEach((charClass) => {
//   console.log('class name is:', charClass.name);
// });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


const globalVar = 5;

const makeFunction = () => {
  const localMakeFunction = 6;
  const babyFunction = () => {
    const localBabyVariable = 7; // localBabyVariable + localMakeFunction + globalVar
    console.log('the scope:', localBabyVariable, localMakeFunction, globalVar);
  };
  return babyFunction;
};

let returnOfMakeFunction = makeFunction();

console.log('return', returnOfMakeFunction);
returnOfMakeFunction();


