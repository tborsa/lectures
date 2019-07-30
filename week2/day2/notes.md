# Asynchronous Control Flow
![flow](https://raw.githubusercontent.com/tborsa/lectures/master/week2/day2/assets/flow.gif)

# Topics 📢
- Asynchronous and Synchronous
- Asynchronous control flow
 - setTimeout and setInterval functions
 - Filesystem functions and their async nature
- Events and event handling

# Callbacks Review
![callbacks](https://raw.githubusercontent.com/tborsa/lectures/master/week2/day2/assets/callbacks.jpg)
What are callbacks?

What is a higher order function?

Review Example

# What is Asynchronous vs What is Synchronous
![waiter](https://raw.githubusercontent.com/tborsa/lectures/master/week2/day2/assets/waiter.jpg)

__Synchronous:__ is often referred to as blocking execution. When a task cannot be executed immediately the program will wait for it to finish before continuing on to other things.

__Asynchronous:__ is often referred to as non-blocking execution. When a task cannot be executed immediately the program will continue on to other things and return to the task later when it is complete.

A synchronous waiter would take an order from a customer deliver it to the cooks and then wait for the food to finish before taking another order. 

A more typical waiter is asynchronous. They take a customers order, deliver it to the chef then continue to take orders until the food finishes, at which point they give the meal to the customer. 

# JS Asynchronous

JavaScript is an asynchronous language. Just like a typical waiter when it has to wait for something, it will continue to do tasks that it can progress on.

Javascript started as a browser language. It needed to be asynchronous to handle all of the different UI events at the same time.

The things that Javascript often has to wait for are Input/Output actions or IO for short.

To deal with asynchronous code Javascript uses callbacks.
The callback of an asynchronous function will only be executed once the asynchronous task has been completed.

```javascript
console.log('BEFORE CALL');

setTimeout(() => console.log('INSIDE CALL'), 1000);

console.log('AFTER CALL');
```
## SetTimeout ⏰ SetInterval ⏱
Settimeout and SetInterval are functions that force a wait / force async behavior.

__SetTimeout:__ specifies a function to be called once after a specified time.

__SetInterval:__ specifies a function to be called repeatedly given the specified interval.

Both are asynchronous functions. Instead of waiting for the time to elapse JS continues executing code.

# Event Queue
![queue](https://raw.githubusercontent.com/tborsa/lectures/master/week2/day2/assets/queue.jpg)

In JavaScript code that can't be run right away gets put in a queue for later execution.

First a program will execute all of the main source code then it will loop through all of the asynchronous tasks checking if any are finished. 

If one of the IO/asynchronous things is done it's callback will be executed.

# Scope 🔭

What is the scope of asynchronous code?
What will the following code output?

```javascript
let x = 1;
console.log('BEFORE CALL: ', x);

setTimeout(() => {
 x = 2;
 console.log('INSIDE CALL: ', x);
}, 1000);

console.log('AFTER CALL', x);
```
An asynchronous function/callback will retain the scope that it was originally called in.


## FileSystem 🗂

fs is a built in node module for working with files on your computer.
Because it is a module we have to include it at the beginning of a file in order to use it.

```javascript
var fs = require('fs');
```
It takes some time(relatively) to complete operations on files, so these actions are executed asynchronously. (filesystem operations fall under IO)

### Read 📖

Reading files and writing files takes time

```Javascript
var fs = require('fs');
fs.readFile('demofile1.html', 'utf8', function(err, data) {
 console.log(data);
});
```

### Write 📝
There are different methods for writing data to files with fs. One is.
```javascript
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
 if (err) throw err;
 console.log('Replaced!');
});
```

writefile replaces the specified file with the specified content.


## Examples

- What will each output show?
- What will result be equal to?
- How do we get the updated data back? Can we just return it?
- When does higherOrderFunc "end" (finish running) ?
- Since higherOrderFunc finishes "running" before our setTimeout fires, how can the setTimeout callback modify the data local variable?


```javascript
const higherOrderFunc = function(callback) {
 const data = { initials: "YV" };

 console.log('BEFORE TIMEOUT CALL');
 setTimeout(() => {
   data.initials = "YAV";
   callback();
   // as per question 3, what if we return data below? Like so:
   // return data;
 });

 console.log('AFTER TIMEOUT CALL');
 // okay, if not in the setTimeout callback above, as per question 3, what if we return data here? So that result below is set to the data. Like so:
 // return data;
}

console.log('BEFORE MAIN CALL');
const result = higherOrderFunc(() => {
 console.log('INSIDE CALLBACK');
})
console.log('AFTER MAIN CALL');
```


## Events?

![events](https://raw.githubusercontent.com/tborsa/lectures/master/week2/day2/assets/events.png) 

An event is an action on a computer.
With Javascript we can listen for certain events to see if they happen.

Node has an event emitter to handle emitting events and to create event handlers that listen for the event to happen.

Events are what trigger the return to action for asynchronous code.

FS has events, another example of an event is command line input.

# User Input Events

To get command line input we use stdin to listed for the event.

```javascript
process.stdin.setEncoding('utf8');

process.stdin.on('data', 'utf8', (data) => {
   process.stdout.write(`data: ${data}`);
 }
});

process.stdin.on('end', () => {
 process.stdout.write('end');
});
```

# Typewriter


# Sleep sort?


```javascript
const numbers = [900, 310, 1006, 0, 2, 3630, 1, 52, 603, 59, 81, -500, -50];

// yes yes, I know... this doesn't _return_ the numbers and instead outputs them to console. This isn't meant to be production code!
const sleepSort = function(nums) {
 for (const num of nums) {
   setTimeout(() => console.log(num), num);
 }
}

sleepSort(numbers);
```

