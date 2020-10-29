// variables exist at this point

// function declaration
function howdy () {
  console.log("howdy");
};

// functional expression
const hey = function () {
  console.log("hey");
}

// arrow function (expression)
// changes how the `this` keyword works
const hola = () => {
  console.log("hola");
  return 'return value from hola';
};

// callback
// function passed as a parameter and used by another function

// let callback = function howdy () {
//   console.log("howdy");
// };
const sayGreeting = (callback) => {
  // howdy();
  console.log("what is the value", callback);
  callback();
  callback();
}

// 
// sayGreeting(hola);
// sayGreeting(hola);
// sayGreeting(hey);

// hola();
// hey();
// howdy();

// console.log(howdy);
// console.log(hey);
// console.log(hola);


let classes = [
  {name: 'wizard', primaryAbility: 'intelligence'},
  {name: 'barbarian', primaryAbility: 'strength'},
  {name: 'bard', primaryAbility: 'charisma'},
  {name: 'rogue', primaryAbility: 'dexterity'},
  {name: 'druid', primaryAbility: 'wisdom'},
];

let printClassName = (dndClass, index) => {
  console.log("The Class name is:", dndClass.name);
}

let printClassDetails = (dndClass, index) => {
  console.log(`${index} The ${dndClass.name}'s primary ability is ${dndClass.primaryAbility} and ...`);
}

// higher order print function
let printClass = (classes, printFunction) => {
  for (let dndClass of classes) {
    // custom behaviour
    printFunction(dndClass);
  }
}
// const indexName = (value, index) => {
//   console.log(index, ':', value.name);
// }

classes.forEach(function(value, index){
  console.log(index, ':', value.name);
});

// classes.forEach(printClassDetails);

// console.log("++++++++++++++++++++++++++++");

// printClass(classes, printClassName);
// printClass(classes, printClassDetails);

// const primaryEquals = (valueA, valueB) => {}
// const arrayEquals = (valueA, valueB) => {}
// const objEquals = (valueA, valueB) => {}

// const assertEquals = (valueA, valueB, comparisonFunction) => {
//   if (comparisonFunction(valueA, valueB)) {
//     console.log("PASSED");
//   } else {
//     console.log("FAILED")
//   }
// }

// assertEquals(3, 4, primaryEquals);
// assertEquals([1,3,4], [1,3,4], arrayEquals);
// assertEquals({}, {}, objEquals);


