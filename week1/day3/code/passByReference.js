
// let value = reference
const changeValue = function(value) {
  console.log('value before reassign', value); //{one: 1, two: 2}
  value.newKey = 'new';
  console.log('value after reassign', value); //{one: 1, two: 2, newKey: 'new'}
}

// const primitive = 5;

// when passing a reference value to a function or copying it "Do i want a clone, or a copy (same obj)"

const reference = {one: 1, two: 2};

console.log('before function call', reference); // {one: 1, two: 2}
changeValue(reference);
console.log('after function call', reference); //{one: 1, two: 2, newKey: 'new'}