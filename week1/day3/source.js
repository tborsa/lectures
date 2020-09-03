const dogs = { bacon: 'excitable doggie', fluffers: 'a good boi', layla: 'a sweet girl', rover: 'good listener', userInput: 'this is not what you want'};

const userInput = process.argv[2]; //=> 'bacon'

const description = dogs[userInput];

if (description) {
  console.log(`The info on dog ${userInput} is ${description}`);
} else {
  console.log(`That was not a valid dog name try one of these`, Object.keys(dogs));
}

// primitive vs reference example

const changeReference = function(obj) {
  //overwritting the pointer with a primative
  //stays the same
  return obj = 5;
};

const changeValue = function(obj) {
  obj[0] = 5;
  obj = 10;
};

let myObj = {one: 1, two:2};

let copy = myObj;


console.log(myObj);
changeValue(myObj);
console.log(myObj);


