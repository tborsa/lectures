const arr = [
  {type: "add", value: 1},
  {type: "divide", value: 5},
  {type: "multiply", value: 6},
  {type: "subtract", value: 3}
];

const mathsLookup = {
  add: (accumulator, action)=>{
    return accumulator + action.value;
  },
  divide: (accumulator, action)=>{
    return accumulator / action.value;
  },
  multiply: (accumulator, action)=>{
    return accumulator * action.value;
  },
  subtract: (accumulator, action)=>{
    return accumulator - action.value;
  }
};

const result = arr.reduce((accumulator, action)=>{
  return mathsLookup[action.type](accumulator, action);
},0);
console.log(result);