// created a list of variables and function
//functional declaration (hoisted)

function howdy(num) {
  console.log("hows it going?" + num);
  return 5;
};

//use it
// howdy();

// functional expression
const howdyTwo = function() {
  console.log('hows it going again?');
};

// howdyTwo();

// function expression using arrow function syntax (not hoisted)
const howdyThree = () => {
  console.log("howdy for the third");
};

// howdyThree();

// this function should recieve 1 parameter which should be a function
const higherOrderFunction = (callback) => {
  console.log(callback);
  callback();
};

// console.log("what is this howdy", howdy);// reference to the function object
// console.log("what is this howdy()", howdy());

// higherOrderFunction(howdy); // passing the reference/function obj to the higher order function

const arr = [1,3,4,5];

const multiplication = (elem) => {
  console.log('square :', elem * elem);
};

arr.forEach(multiplication);

let classes = [
  {name: 'wizard', primaryAbility: 'intelligence'}, 
  {name: 'barbarian', primaryAbility: 'strength'}, 
  {name: 'bard', primaryAbility: 'charisma'}, 
  {name: 'rogue', primaryAbility: 'dexterity'}, 
  {name: 'druid', primaryAbility: 'wisdom'}
];

let printClassDetails = (classInfo) => {
  console.log(classInfo.name + ' primary ability is ' + classInfo.primaryAbility);
};

let printClassName = (classInfo) => {
  console.log('The Class name is: ', classInfo.name);
};

const ourForEach = (callback, array) => {
  for (let elem of array) {
    callback(elem);
  }
};

[1,2,3].forEach((elem => console.log('square : ', elem * elem));

// ourForEach((elem) => console.log("the info: ", elem), classes);
// // can't call the the info function
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// // ourForEach(printClassName, classes);


const assertEqual = (value1, value2, comparison) =>{
  if (comparison(value1, value2)) {
    console.log('true');
  } else {
    console.log('false');
  }
}

assertEqual(1,3, (value1, value2) => {
  return value1 === value2;
});

assertEqual([1,2,3], [1,3,4], arraysEq);

assertEqual({one: 1}, {two: 2}, objEqual);