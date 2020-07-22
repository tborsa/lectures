
// had no change to the parameter
// const changeReference = function(value) {
//   value = 1000;
// };

const changeReference = function(value) {
  // console.log('this is value a copy of ref', value);
  value.animal = "gorilla";
  // console.log('this is value after gorilla', value);
  // value = 'another thing';
  // console.log('this is value after reassignment', value);
};

let primative = 5;
let ref = {animal: 'frog'};


// console.log("primative value", primative); // 5
// changeReference(primative);
// console.log("primative value", primative); // 

console.log("ref value", ref); //{animal: 'frog'}
changeReference(ref);
console.log("ref value", ref); //{animal: 'gorilla'}
