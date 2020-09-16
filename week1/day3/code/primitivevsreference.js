


// let someValue = obj;
const updateValue = function(someValue) {
  console.log('someValue before func assign', someValue); //{ stuff: 'things' }
  someValue[4] = "something new"; // does affect the data outside
  
  // someValue = "something new"; //does not affect the data outside of the function
  console.log('someValue after func assign', someValue); //{ stuff: 'things', new: 'something new' }
};


let num = 5;

let arr = [1,2,3,4];

// create a new empty arr
// loop through the old arr and add the key value pairs to the new  empty;



console.log('arr before func call', arr); //{ stuff: 'things' }
updateValue(arr); //what happens?
console.log('arr after func call', arr); // { stuff: 'things', new: 'something new' }
