
# Immutable Data Patterns

![immutable](https://raw.githubusercontent.com/tborsa/lectures/master/week7/day2/assets/tablet.jpg)


# Topics📢

Notes can be found [here](https://github.com/tborsa/lectures/tree/master/week7/day2)

Code can be found [here](https://github.com/tborsa/react-week-playground)

[Here](https://www.youtube.com/watch?v=4gzOQ-s7Sfs&feature=youtu.be) is a link to a similar lecture that Francis did on Immutable Update Patterns 

- State Review
- React Render Cycle
- The Problem?
- Immutable data patterns with
  - Objects 
  - Arrays
- nested data?


# React Review

State?

```
- Value of our (stateful) variables at a certain moment/render
- Components (consumers of state)
- So the changes persist between renders
- a state change -> a new render (or excution of our function)
- data that can change
- data that determines the appearance of a component


```

State as a concept: the remembered information about a system.

State in React: the remembered information about a system + useState & Reacts conventions for tracking state. 

A new value of state is created every time the component runs and renders.
Each prop and state is for a particular functional component execution, and they remain the same throughout that render. 

# The Problem

If we mutate the current value of state withing our component then it interferes with how react checks if there is a new state. 

```js
export default function App() {
  const [list, setList] = useState([1,3,4]);

  const updateList = () => {
    const newList = list; // newList references the same array as list
    newList.push(5); // uh oh this will mutate/change list
    setList(newList); // when react compares `list` to `newList` they are the
                      // same, so react sees no reason to run the app
                      // component again. 
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      {list.map(elem => (<p>{elem}</p>)}
      <button onClick={updateList}>Update List </button>
    </div>
  );
}
```

So when we update the state we must use patterns that will not change the original stateful value (list). 

# Immutable Data Paterns
![immutable](https://raw.githubusercontent.com/tborsa/lectures/master/week7/day2/assets/immutable.jpg)

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


# Multidiimension arrays? nested objects?

```js
export default function App() {
  const [nested, setNested] = useState({
    one: 1,
    dog: "sam",
    more: { two: 2, three: 3 }
  });

  const updateNested = () => {
    const newNested = { ...nested, more: { ...nested.more, two: 6 } };
    setNested(newNested);
    console.log("curr  state ", nested);
    console.log("new ", newNested);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{nested.more.two}</h2>
      <button onClick={updateNested}>update nested</button>
    </div>
  );
}
```