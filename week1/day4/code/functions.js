
// functional declaration
function englishGreeting () {
  console.log('hello world');
  return 'english';
}

// functional expression
const spanishGreeting = function () { //anonymous function
  console.log('hola mundo');
  return 'spanish';
};

// function expression arrow function 
// (handles this differently)
// implicit return 
const japaneseGreeting = (timeOfday) => {
  console.log('konnichiwa sekai' + timeOfday);
  return 'japanese';
}

// const returnsTen = (add) => 10 + add;

// const longReturnsTen = function () {
//   return 10;
// }

// japaneseGreeting();
// spanishGreeting();
// englishGreeting();

// callbacks
// is a function that is called by another function
// when passed as a parameter to said function

// let greeting = englishGreeting;
// a higher order function is a function that uses a callback
const higherOrderGreeting = (greeting) => {
  console.log(3);
  console.log(2);
  console.log(1);
  console.log('...');
  console.log('what is greeeting', greeting);
  // greeting();
}

// check the current language
// decide on a greeting to use

// higherOrderGreeting(englishGreeting);
// higherOrderGreeting(spanishGreeting);
// higherOrderGreeting(japaneseGreeting);


let classes = [
  {name: 'wizard', primaryAbility: 'intelligence', spells: ['whichbolt', 'fireball']}, 
  {name: 'barbarian', primaryAbility: 'strength', spells: ['whichbolt', 'fireball']}, 
  {name: 'bard', primaryAbility: 'charisma', spells: ['whichbolt', 'fireball']}, 
  {name: 'rogue', primaryAbility: 'dexterity', spells: ['whichbolt', 'fireball']}, 
  {name: 'druid', primaryAbility: 'wisdom', spells: ['whichbolt', 'fireball']}
];

const printClassName = (dndClass) => {
  console.log(`The class name is: ${dndClass.name}`);
}

const printClassDetails = (dndClass) => {
  console.log(`${dndClass.name}, primary ability: ${dndClass.primaryAbility}, ...`);
}

// forEach <- already exists
const ourForEach = (arr, thingToDo) => {
  // arr = [x, ...]
  // thingToDo = () => {}
  // loop through array
  for (let item of arr) {
    // do something to each thing in the array
    thingToDo(item); // printClassName(classes[0])
  }
};

// ourForEach(classes, printClassName)
// pass a callback that recieves 1 parameter represents an element in the array
// 
// classes.forEach((item) => {
//   console.log("one time use", item);
// });

// ourForEach(classes, printClassDetails);

// printClassName(classes[0]);
// printClassDetails(classes[0]);


const primitiveEquals = (val1, val2) => {
  return val1 === val2;
}

const arrEquals = (val1, val2) => {
  //fake version
  return true;
}

const objEquals = (val1, val2) => {
  // fake versions
  return true;
}

const assertEqual = (val1, val2, expected, comparisonFunction) => {
  let outcome = comparisonFunction(val1, val2);
  if (outcome === expected) {
    console.log(val1, val2, 'yay you did it!!');
  } else {
    console.log(val1, val2, 'oops more work');
  }
}

assertEqual(4, 4, true, primitiveEquals);
assertEqual([4], [4], true, arrEquals);
assertEqual({one: 1}, {one: 1}, true, objEquals);



