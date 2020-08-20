


const changeReference = function(value) {
  console.log('in function before assign: ', value);
  value.addedInFunction = "will this affect ref";
  console.log('in function after assign: ', value);
};
// could be a pointer?
// direct copy
  // primitive would be a copy of the value
  // ref would be a copy of the reference

const primitive = 5;
const ref = {one: 1, two: 2};


// changeReference(primitive);
// console.log('after ', primitive); // new

console.log("ref before function call: ", ref);
changeReference(ref);
console.log("ref after function call: ", ref); //same