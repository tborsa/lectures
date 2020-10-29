
# Data Fetching & Other Side Effects

![Side Effects](https://raw.githubusercontent.com/tborsa/lectures/master/week7/day2/assets/experiment.gif)

Notes can be found [here](https://github.com/tborsa/lectures/tree/master/week7/day3)

Code can be found [here](https://github.com/tborsa/react-week-playground/tree/side-effects)


# Topics📢

- Side Effects
  - types of side-effects 
- useEffect
  - Dependency array
  - Cleanup
- Selectors


# React Review

State?
```
- persistance of data between re-renders
- data within our component (special)
- Data that you can see on the page (data binding)
- useState hook to handle our state
- it tracks our initial state our state changes (looks for a change)



(state + props)  =>  JSX (dom tree)

```
State as a concept: the remembered information about a system.

State in React: the remembered information about a system + useState & Reacts conventions for tracking state. 

A new value of state is created every time the component runs and renders.
Each prop and state is for a particular functional component execution, and they remain the same throughout that render. 


# Side Effects

What are Pure functions?
```

-function with not side-effects
-one input one output
given the same input will alwauys produce the same output
-Purpose is to return a value (nothing else)
-


let a = 4

let func = (num) => {
  a = num;
  return num * num;
}


```
A Function that doesn't have any side effects.   
It doesn't perform any mutations.  
  (changing the global state)  
Given the same input, returns the same output.  


What are Side Effects?

```










```
Any function that is not pure has side effects. 

- Depends on external data(outside its local environment, state) 
- Has an observable effect besides returning a value (often the main effect) 

Primary effect -> side effect. 

Side effects can depend on the history of the application! (what happens before or after the function is run)

Can be hard to debug!

## types of side-effects 

- Setting timers or intervals  
- Modifying DOM elements not controlled by React  
- A network request  
- Connection to a socket server  
- Adding and removing event listeners
- Logging to the console

# useEffect

## document title demo

Components are functions that take in props & state and return react elements. 

Anything that does not contribute to the output of the functional component (the JSX), should be encapsulated in a useEffect

Anything that does contribute to the output of the functional component, but depends on something external to the functional component should be encapsulated in a useEffect.  

useEffect is necessary for any side effect that occurs when rendering a component (So it is handled properly) 

useEffect lets you synchronize things outside of the React tree according to our props and state. (Dom tree & JSX is already synchronized by react)

What does handle properly mean?

- side effects happen after the primary effect of returning JSX (that is painted to the dom)  
- synchronization of side effects between functional component calls  
  - only occurs when the result of the side effect will be different  
  - don't want redundent function calls  
  - also don't want to miss a potential new result of the side effect (miss a chance to update the effect)  
- Result of the SideEffect can be cleaned up when needed  

# How is useEffect called?

Similar to State a new useEffect function is created every time the component runs,
the component remembers it and then calls the effect after react paints the dom.

useEffect Flow
1. React turns your JSX into HTML (client-side rendering) and updates the DOM
2. The browser responds to the change by updating the UI
3. Any cleanup for effects from the previous render are performed
4. New effects for the current render are performed


So effects don’t need to block screen updates!

### Conceptually Effects are part of the render result

__React:__ Give me the UI when the state is 0.    
__Your component:__ Here’s the render result:  

>You clicked 0 times  

__Also remember to run this effect after you’re done:__ () => { document.title = 'You clicked 0 times' }    
__React:__ Sure. Updating the UI. Hey browser, I’m adding some stuff to the DOM.  
__Browser:__ Cool, I painted it to the screen.  
__React:__ OK, now I’m going to run the effect you gave me.   

>Running () => { document.title = 'You clicked 0 times' }.  

all functions within a component have the props, state, and surrounding scope for that functional call baked into them. Snapshot in time. 

# Dependency array

React already handles redundancy in output (shadow dom), but needs to handle side effect redundancy as well. 

## double state count demo 

Tell React only to call our useEffect if particular values change. 

It’s like if we told React: “Hey, I know you can’t see inside this function, but I promise it only uses name and nothing else from the render scope.”


ANY value useEffect uses outside of the function should be included in the dependency array. 

# Cleanup

```js
  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.id, handleStatusChange);
    };
  });
```
Order of cleanup:

React renders UI for {id: 20}.  
The browser paints. We see the UI for {id: 20} on the screen.  
React cleans up the effect for {id: 10}.  
React runs the effect for {id: 20}.  


# Functional setState

A problem with the dependency array? 

```js
useEffect(() => {
  const id = setInterval(() => {
    setCount(count + 1);
  }, 1000);
  return () => clearInterval(id);
}, [count]);
```

To do this, we need to ask ourselves: what are we using count for? It seems like we only use it for the setCount call. In that case, we don’t actually need count in the scope at all. When we want to update state based on the previous state, we can use the functional updater form of setState:

```js
useEffect(() => {
  const id = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);
  return () => clearInterval(id);
}, []);
```

minimize the information needed in a component & within useEffect.
