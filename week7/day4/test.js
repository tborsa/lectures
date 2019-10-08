const arr = [{value: 5, type: 'add' } , {value: 3, type: 'subtract' }, {value: 8, type: 'multiply' }, {value: 2, type: 'divide' } ];

const arr = [{value: 5, type: 'add' } , {value: 3, type: 'subtract' }, {value: 8, type: 'multiply' }, {value: 2, type: 'divide' } ];

const multiply = [{value: 6, type: 'multiply'}];

"add interviewer"


state
 => this add Array
 => object 


let accumulator = 0;

let result = arr.reduce( (accumulator, action) =>{
  if(action.type === 'add'){
    return accumulator + action.value;
  }else if(action.type === 'subtract'){
    return accumulator - action.value;
  }else if(action.type == 'multiply'){
    return accumulator * action.value;
  }else{
    return accumulator / action.value;
  }
}, 0);

console.log(result);