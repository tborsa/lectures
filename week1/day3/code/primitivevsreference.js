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

