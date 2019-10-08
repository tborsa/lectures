# Complex State Management  & ~~Web Sockets~~

![reducer](https://raw.githubusercontent.com/tborsa/lectures/master/week7/day4/assets/chat.gif)

Our slick login form can be found [here](https://codesandbox.io/embed/angry-edison-x8o3l)

LoudChat can be found [here](https://github.com/tborsa/loudchat)

Notes and code can be found [here](https://github.com/tborsa/lectures/tree/master/week7/day4)

I have also included the information on sockets if you wanted to learn more about them.

# Topics📢

- Reducers 
  - Pure Functions 
  - Static & Type Reducers 
  - Reducer Hook 
- Websockets 


# Reducers

![reducer](https://raw.githubusercontent.com/tborsa/lectures/master/week7/day4/assets/blender.gif)

A programming pattern to reduce data structures down.

Reducers are pure functions, meaning their output is determined solely by their input values.

We have probably used a reducer pattern in code that we have written up to this point. 
- For loop to turn an array into a sum

There is a built in reduce pattern with arrays in JavaScript. 
array.prototype.reduce

```javascript
let arr = [1,2,3,4];
let res = arr.reduce((accumulator, value)=>{accumulator+value}, 0)
```
The accumulator represents the value being carried over from each loop of the reducer.  
Value is the current element from the array.

# Complexity to reducer

By using nested objects within an array you can be more precise on how you are consolidating the input data. 

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

With this pattern we are not restricted to the same behavior for each element in the array.

# Why is this important?

Reducers are helpful for modifying data in general, but are particularly helpful with React.

So far we have used the hook __useState__ for setting state data.
(Data that our components depend on)

Another hook that we can use to manage state is  __useReducer__
useReducer is similar to useState but with reducers. 

# useReducer

useReducer takes two parameters, a reducer function and the initial state to use.
It outputs the current value of the state, and a dispatcher.

The dispatcher calls the reducer function with the current state and the action passed by the user.

```javascript

const reduceUsers = (state, action) {
 if(action.type==='add'){
   return state + action.value;
 }else if(action.type === 'subtract'){
   return state - action.value;
 }else if(action.type === 'reset'){
   return 0;
 }else{
   return state;
 }
}

let [count,dispatchCount] = useReducer(reduceCount, 0);

dispatchCount({type: 'subtract', value: 6});

```

demo counter


# useReducer Contd..

useReducer allows us to modify and update our state in more complex and manageable ways.
We can define state changes as specific actions (add, subtract, reset)
Especially if your state is complex (ie. objects, arrays) useReducer makes it easier to handle.

We have some options on how we create the reducer part of use reducer.

### if/else
```javascript
const reduceUsers = (state, action) {
 if(action.type==='add'){
   return state + action.value;
 }else if(action.type === 'subtract'){
   return state - action.value;
 }else if(action.type === 'reset'){
   return 0;
 }else{
   return state;
 }
}
```

### switch
```javascript
const reduceUsers = (state, action)=> {
 switch(action.type){
   case 'add':
     return state + action.value;
   break;
   case 'subtract':
     return state - action.value;
   break;
   case 'reset':
     return 0;
   break;
   default:
     return state;
 }
}
```
### lookup

```javascript
const userLookup = {
 add: (state, value) => {
   return state + value;
 },
 subtract: (state, value) => {
   return state - value;
 },
 reste: (state, value) => {
   return 0;
 }
}
const reduceUsers = (state, action) => {
 return userLookup[action.type](state, action.value)||state;
}
```

What are the advantages of each?

# WebSockets

![sockets](https://raw.githubusercontent.com/tborsa/lectures/master/week7/day4/assets/socket.gif)


WebSockets is a web protocol that allows for real time communication.

Realtime?

Examples:   
http://powerline.io/   
http://web-demo.adaptivecluster.com/ 

# History of Sockets

![history](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day4/Lecture/assets/history.jpg)

Websockets was created out of a want/need for open real-time communication.

- 1995 browser wars netscape vs explorer 
 - 1999 Birth of AJAX 
 - There was no real notion of allowing a server to contact the user proactively 

- long polling 
Open an XMLHttpRequest connection and leave it open to allow for ongoing communication. 
 - No clear formatting on data 
 - tricky and has complications 

- 2008 Websockets were coined and work began on bidirectional real time communication 
- The idea made it into a W3C standards draft 
- 2010 Google chrome shipped with full support of the new Websockets protocol 
- 2011 RFC 6455 – The WebSocket Protocol – was published 
- Today all major browsers support websockets 

[Deep Dive](https://www.ably.io/concepts/websockets)


# Websockets as a Protocol

Websockets are full duplex communication over a single TCP connection.
Websocket protocol is distinct from http but is compatible with it.


__Client__

websockets as a protocol is supported by modern browsers. As such there is websocket implementation built into the client. (no libraries required!)

- WebSocket 
- WebSocket protocol is natively supported by browsers 
- Built in client api 
- Socket.io 
- Wraps WebSocket ApI with some additional features 

__Server__

Node does not have a native implementation of websockest so a library is required. There are many options for socket servers.

- websockets 
 - Barebones almost pure JS implementation of WebSocket protocol 
   - client uses native websocket object 

- ws
 - "ws is a simple to use, blazing fast, and thoroughly tested WebSocket client and server implementation." 
 - client uses native websocket object 

- socket io 
 - client uses socket.io client 
 - additional features + fallback options  
 - parses incoming data to JSON 
 - message types 


# React and Websockets

```javascript
//create socket connection
const socket = new WebSocket('ws://localhost:8080');
//listen to socket events
socket.onopen = ()=>{
 console.log('socket successfully connected');
};
socket.onmessage = (message)=>{
 console.log('Message Received: ', message);
};
//send socket messages
socket.send('hello socket!');
```


