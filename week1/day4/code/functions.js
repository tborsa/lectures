
// // functional declaration
// function howdy(){
//   console.log("hey there pardner");
// }

// // functional expression
// const howdyTwo = function() {
//   console.log("hey there pardner again");
// };

// // arrow function
// const arrowFunc = () => {

// };


// // anonymous function
// function() {
//   console.log("some stuff");
// }

// // anonymous arrow function

// () => {

// };

let classes = [
  {name: 'wizard', primaryAbility: 'intelligence'}, 
  {name: 'barbarian', primaryAbility: 'strength'}, 
  {name: 'bard', primaryAbility: 'charisma'}, 
  {name: 'rogue', primaryAbility: 'dexterity'}, 
  {name: 'druid', primaryAbility: 'wisdom'}
];

const printClassDetails = (dndClass) => {
  console.log(classes);
  return dndClass.name + ' primary ability is ' + dndClass.primaryAbility;
};

const printClassName = (dndClass, index) => {
  console.log(`${index} : ${dndClass.name}`);
};

// classes.forEach(printClassDetails);


// const assertEqual = (actual, expected, isEqual) => {

//   if (isEqual(actual, expected)) {

//   } else {

//   }
// }

// assertEqual([1,2,3], [1,5,4], eqArrays);

// assertEqual({}, {}, eqObject);


const ourForEach = (classList, printCallback) =>{
  let arrOutputs = [];
  for (let classInfo of classList) {
    arrOutputs.push(printCallback(classInfo, 5)); // = printClassName({name: 'wizard', primaryAbility: 'intelligence'})
  }
  console.log(arrOutputs);
};

ourForEach(classes, printClassDetails);
// console.log("SECOND FOR EACH CALL");
// ourForEach(classes, printClassName);


const global = "everyone can use this";

const functionOne = () => {
  const localOne = "Everything  inside functionONe can use this";
  console.log("scope of function one", localOne, global);
  const functionTwo = () => {
    const localTwo = "EVeryting inside functionTwo can use this";
    console.log("scope of functionTwo", localTwo, localOne, global);
    const functionThree = () => {
      const localThree = "EVeryting inside functionTwo can use this";
      console.log('can i see local 4');
      console.log("scope of functionTwo", localThree, localTwo, localOne, global);
    };
    functionThree();
  };

  functionTwo();

};




functionOne();