
# Custom Hooks & Immutable Data Patterns

![custom hooks](https://raw.githubusercontent.com/tborsa/lectures/master/week7/day3/assets/hooks.jpg)


# Topics📢

Notes can be found [here](https://github.com/tborsa/lectures/tree/master/week7/day3)

Code can be found [here](https://github.com/tborsa/react-week-playground)

We can build components, and we can retrieve and store data. We need to learn how to organize the logic used to perform updates on our data. This lecture provides an overview of the process used to build and use custom Hooks.

- Separating rendering from logic
- Custom Hook
- Immutable data patterns with Objects and Arrays


# React Review

const normalVariable = 5;

State?

```
- Value of our (stateful) variables at a certain moment/render
- Components & effects (consumers of state)
- So the changes persist between renders
- a state change -> a new render (or excution of our function)










```

State as a concept: the remembered information about a system.

State in React: the remembered information about a system + useState & Reacts conventions for tracking state. 

A new value of state is created every time the component runs and renders.
Each prop and state is for a particular functional component execution, and they remain the same throughout that render. 

Side effects?

```
- when a function uses something outside of it's scope
  - dependencies outside of it's parameters.
  - relying on information/actions outside of it's parameters
  - (a, b) => c   (a, b) => x
- (a, b) => c


- side effects can access stale (state) previous values of state
  - Many versions of state.

- handle all side effects/functions with side effects in
useEffect hook.

- Control a side effects dependancies

useEffect(() => {
  // side effects 
}, []);

```


# Rendering vs Logic
![render](https://raw.githubusercontent.com/tborsa/lectures/master/week7/day3/assets/render.jpg)


React allows us to break up our html & Dom rendering into components. 
Break down a complex render into smaller more manageable renders. 

Business logic or domain logic is the part of the program which encodes the real-world business rules that determine how data can be created, stored, and changed.

So far rendering and domain logic has been paired together in a component. Because our components are modular as a side effect our logic is also somewhat modular. 

But what if the logic in a component grows too large?
What if we want to use the same logic across multiple components?

🎣

# Custom Hooks

Seperate modules that include component logic. 


We can use other hooks in a custom hook (useState, useEffect, ect.)


# Immutable Data Paterns
![immutable](https://raw.githubusercontent.com/tborsa/lectures/master/week7/day3/assets/immutable.jpg)

what?

How do we get a new updated version of our data without modifying the original source. 


obj add
```
const state = {stuff}
const new = {...stuff, b: 'new'}
```


obj remove
```
const state = {stuff}
const copy = Object.assign({}, state)
delete copy.thing

//or

const {thing, ...new} = state;

```


array add
```
const state = []
const new = [...state, newElement]
```

array remove
```
const state = []
const new = state.slice(0);
//pop shift splice
new.splice(#,1)

//or


const state = [];

const new = state.filter(elem => elem === 'remove');

```


Multidiimension arrays? nested objects?