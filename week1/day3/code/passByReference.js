// const vs let

// const primative = 25;

const reference = [1,3,4,5];
// reference.push(5);
// reference[1] = 10;
// console.log(reference);
const value = reference;

value = {one: 1, two: 3};

console.log('waht is value, reference:', value, reference);

// let value = <whatever was passed>
const updateValue = function(value) {
  // let value = reference;
  console.log('value inside function before reassignment:', value) //{ one: 1, two: 2, three: 3 }
  value.push(83838);
  console.log('value inside function after reassignment:', value) //{ one: 100, two: 2, three: 3 }
}

console.log('value outside function before reassignment:', reference) //{ one: 1, two: 2, three: 3 }
updateValue(reference);
console.log('value outside function after reassignment:', reference) //{ one: 100, two: 2, three: 3 }
