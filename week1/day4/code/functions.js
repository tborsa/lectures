// functional declaration
function howdy() {
  console.log("howdy!");
  return "howdy's return 1"
}

// functional expression
const howdyTwo = function () {
  console.log('howdy again');
  return "howdy's return 2"
}

// functional arrow expression
const howdyThree = () => {
  console.log("howdy the third");
  return "howdy's return 3"
};

const howdyFour = () => 'return howdy 4';
// console.log(howdyFour());

// anonymous function = function without a name

// takes one parameter a callback
// const callback = howdy;
const higherOrderHowdy = (callback) => {
  console.log('howdy happening in 3...');
  console.log('...2');
  console.log('...1');
  callback();
}

// higherOrderHowdy(howdy;
// higherOrderHowdy(howdyTwo);
// higherOrderHowdy(howdyThree);

// howdyThree();
// howdyTwo();

const classes = [
  {name: 'wizard', primaryAbility: 'intelligence', spells: ['fireball', 'whichbolt']},
  {name: 'barbarian', primaryAbility: 'strength', spells: ['fireball', 'whichbolt']},
  {name: 'bard', primaryAbility: 'charisma', spells: ['fireball', 'whichbolt']},
  {name: 'rogue', primaryAbility: 'dexterity', spells: ['fireball', 'whichbolt']},
  {name: 'druid', primaryAbility: 'wisdom', spells: ['fireball', 'whichbolt']},
]

const printClassName = (dndClass) => {
  console.log('The class name is: ', dndClass.name);
};

const printClassDetails = (dndClass) => {
  console.log(`${dndClass.name}, primary ability: ${dndClass.primaryAbility}, ...`);
};

// printClassName(classes[0]);
// printClassDetails(classes[0]);

const ourForEach = (classes, printFunction) => {
  for (let dndClass of classes) {
    printFunction(dndClass);
  }
}

// ourForEach(classes, printClassName);
// ourForEach(classes, printClassDetails);

// classes.forEach(printClassName);
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// classes.forEach(printClassDetails);

// classes.forEach((dndClass) => {
//   console.log('custom print of class,', dndClass.name);
// });

const primitiveEquals = (val1, val2) => {
  return val1 === val2;
}

const eqArrays = (val1, val2) => {
  return true;
}

const eqObjects = (val1, val2) => {
  return true;
}

const assertEquals = (valueOne, valueTwo, comparisonFunction) => {
  console.log('valueone, valuetwo, comparisonfunction', valueOne, valueTwo, comparisonFunction)
  const result = primitiveEquals(valueOne, valueTwo);
  if (result) {
    console.log(`${valueOne} is equal to ${valueTwo}`);
  } else {
    console.log(`${valueOne} is not equal to ${valueTwo}`);
  }
}

assertEquals(4, 6, primitiveEquals);
console.log('~~~~~~~~~~~~~~~~~~~~~')
assertEquals([1,2,3], [1,2,3], eqArrays);
console.log('~~~~~~~~~~~~~~~~~~~~~')
assertEquals({one: 1}, {one: 1}, eqObjects);
console.log('~~~~~~~~~~~~~~~~~~~~~')

// const assertEquals = (valueOne, valueTwo) => {
//   const result = primitiveEquals(valueOne, valueTwo);
//   if (result) {
//     console.log(`${valueOne} is equal to ${valueTwo}`);
//   } else {
//     console.log(`${valueOne} is not equal to ${valueTwo}`);
//   }
// }

// const assertArrayEquals = (valueOne, valueTwo) => {
//   const result = eqArrays(valueOne, valueTwo);
//   if (result) {
//     console.log(`${valueOne} is equal to ${valueTwo}`);
//   } else {
//     console.log(`${valueOne} is not equal to ${valueTwo}`);
//   }
// }

// const assertObjectsEquals = (valueOne, valueTwo) => {
//   const result = eqObject(valueOne, valueTwo);
//   if (result) {
//     console.log(`${valueOne} is equal to ${valueTwo}`);
//   } else {
//     console.log(`${valueOne} is not equal to ${valueTwo}`);
//   }
// }