

const arr = [1, 3, 5, 6 ,7];

// let sum = 0;
// for (let value of arr) {
//   sum += value;
// }

// action + data => data
// sum + arr => totalsum
// diff + arr => totaldiff

const reducer = (accumulator, currentValue) => { // 1 3 => 4 5
  return accumulator + currentValue;
};
const diffReducer = (accumulator, currentValue) => { // 1 3 => 4 5
  return accumulator - currentValue;
};


const sum = arr.reduce(reducer, 0);
const diff = arr.reduce(diffReducer, 0);

console.log(sum);
console.log(diff);