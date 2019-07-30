# Complex State Management

# Reducers
 A programming pattern to reduce data structures down 

 For loop to turn an array into a sum 

 array.prototype.reduce

 let arr = [1,2,3,4];
 arr.reduce((accumulator, value)=>{accumulator+value}, 0)


# Complexity to reducer 

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


# WebSockets

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


- WebSocket History  
- web sockets with react  
- socket io


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

websockets is a protocol there are many options for socket servers

__Server__
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

__Client__

- WebSocket  
 - WebSocket protocol is natively supported by browsers  
 - Built in client api  
- Socket.io  
 - Wraps WebSocket ApI with some additional features  

# React and Websockets

__Server__  
- Generic setup  


__Client__  

```JavaScript
import React, { Component } from 'react'
const URL = 'ws://localhost:3000'

class Chat extends Component {
 state = {
   name: 'Travis',
   messages: [],
 }


 componentDidMount() {
   this.ws = new WebSocket(URL)
   this.ws.onopen = () => {
     // event listener for connection
     console.log('connected')
      this.ws.onmessage = evt => {
        // on incoming message, add it to the list of messages
        const message = JSON.parse(evt.data)
        this.setState({
          messages: [...this.state.messages, message]
        })
      }
   }
   //Could add connection on close

 }
 .
 .
 .
 submitMessage = messageString => {
   // on submitting the ChatInput form, send the message, add it to the list and reset the input
   const message = { name: this.state.name, message: messageString }
   this.ws.send(JSON.stringify(message))
   this.setState({
     messages: [...this.state.messages, message]
   })
 }

Render(){
  return(
    <Message socket={this.sockt}/ socketHandlerFunction={this.handlePost} ></Message>
    <Notification socket={this.socket}></Notification>
  )
}

```
Socket as State?  
Props?

When to initiate?

in constructor?
componentDidMount?

this.ws = thing

methods down
keep render as simple as possible


# Socket.io

![Socketio](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day4/Lecture/assets/socketio.jpg)

[Docs](https://socket.io/docs/)

Socket.io is websockets wrapped with additional protocol.

A WebSocket client will not be able to successfully connect to a Socket.io server, and a Socket.io client will not be able to connect to a WebSocket server.


Adds more features!

__Custom Events__

```Javascript
socket.on('my other event', function (data) {
   console.log(data);
 });
```

__Server or Socket Emits__

```Javascript
io.emit('this', { will: 'be received by everyone'});
socket.emit('this', {will: 'be received by one socket' })
```

__Broadcast__

Send a message to all sockets except the sending socket

```Javascript
socket.broadcast.emit('this', {will: 'be received by all but the calling socket' });
```

__Rooms__

Join a specific room

```Javascript
io.on('connection', function(socket){
 socket.join('some room');
});
```
emit only to those in a specific room

```Javascript
io.to('some room').emit('some event');
```




# Battle

![battle](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week6/Day4/Lecture/assets/battle.jpg)

- add health numbers  
- add socket battle  
- pass attack function down  
- add broadcast when one pokemon wins  
- Battle rooms?  
- ????  
- Profit  
