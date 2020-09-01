
# Immutable Data Patterns

![immutable](https://raw.githubusercontent.com/tborsa/lectures/master/week7/day3/assets/tablet.jpg)


# Topics📢

Notes can be found [here](https://github.com/tborsa/lectures/tree/master/week7/day2)

Code can be found [here](https://github.com/tborsa/react-week-playground)

We can build components, and we can retrieve and store data. We need to learn how to organize the logic used to perform updates on our data. This lecture provides an overview of the process used to build and use custom Hooks.

- State Review
- React Render Cycle
- The Problem?
- Immutable data patterns with
  - Objects 
  - Arrays
- nested data?


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

# React Render


# The Problem

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