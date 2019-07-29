# Complex State Management

# Reducers
 A programming pattern to reduce data structures down 

 For loop to turn an array into a sum 

 array.prototype.reduce

 let arr = [1,2,3,4];
 arr.reduce((accumulator, value)=>{accumulator+value}, 0)

 Using nested objects within an array you can be more precise on how you are reducing 

 ```js
 [
  { type: "add", value: 3 },
  { type: "subtract", value: 5},
  { type: "add", value: 7}
].reduce((state, action) => {
  if(action.type === "add") {
    return state + action.value;
  }
  if(action.type === "subtract") {
    return state - action.value;
  }
}, 0);
```

Approach
Start by talking about the concept of reducers in Javascript. The example in the activity shows the transition from a normal sum reducer to one that uses an object with a type property that can direct the behaviour of the reducer.

With reducers, we can describe every state change as an action. It is important to show that reducers are pure and state can be reproduced predictably given a list of actions.

WebSockets are a big topic for a single lecture. Focus on the important parts:

Why were WebSockets introduced?
What techniques were used before the introduction of WebSockets to emulate real-time communication?
How do we use WebSockets in the browser?
Build an application that uses WebSockets to dispatch actions. Although a chat application may be too obvious, it provides an excellent reference for students. The lecturer should choose something that is realtime and of similar scope.

Demo
During the demonstration, we should discuss the following topics.

Sockets are confusing to set up because there is a browser implementation and libraries for the client and server.
Installation and configuration of the web sockets on the server and client.
Deciding which actions to use for a data model.
Defining action types as constants with a comparison of pros and cons.
How does the useReducer Hook differ from the useState Hook?
Which pattern to choose for the reducer. Switch/case, if/else or a lookup object.
Do we have to declare the reducer where we use it? What are the benefits of exporting a reducer from a separate module?
