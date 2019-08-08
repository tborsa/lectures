

let arr = [
    {type: "add", value: 1},
    {type: "subtract", value: 5},
    {type: "add", value: 3},
    {type: "multiply", value: 2}
];

const lookup = {
    add: (accumulator, value)=>{
        return accumulator + value;
    },
    subtract: (accumulator, value) =>{
        return accumulator - value;
    },
    multiply: (accumulator, value) =>{
        return accumulator * value;
    }
}
console.log(lookup["divide"](12, 2))
let total = arr.reduce((accumulator, action)=>{
    console.log(accumulator);
    if(lookup[action.type]){
        return lookup[action.type](accumulator, action.value);
    }else{
        return accumulator;
    }
},0 )


console.log(total);