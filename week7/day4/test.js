const shoppingList = [
  {action: 'subtotal', value: 0},
  {cost: 12, quantity: 1, name: 'pumpkin'},
  {cost: 3, quantity: 5, name: 'kit-kat'},
  {cost: 6, quantity: 1, name: 'pillow case'}
];

//total cost
//subtotal
// toal items
//string list of item names

let sum = 0;

// let [state, setState] =  useState({users: ['ted', 'sam'], appointments: [], })

const result = shoppingList.reduce((action, state) => {
  if (action.action === 'total') {
    return {action: 'total', value: action.value + (state.cost * state.quantity * 1.12) }
  } else if (action.action === 'subtotal') {
    return {action: 'subtotal', value: action.value + (state.cost * state.quantity) }
  }
});

// for (let item of arr) {
//   sum += item;
// }

console.log(result);