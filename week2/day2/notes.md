# Asynchrnonous Control Flow
![flow](https://raw.githubusercontent.com/tborsa/lectures/master/week2/day2/assets/flow.gif)

# Topics
- Asynchronous control flow
- setTimeout and setInterval functions
- Filesystem functions and their async nature
- Events and event handling, another asynchronous topic

# Callbacks Review 
![callbacks](https://raw.githubusercontent.com/tborsa/lectures/master/week2/day2/assets/callbacks.jpg)
What are callbacks?

What is a higher order function?

Review Example 

# What is Asynchronous vs What is Synchrnonous
![waiter](https://raw.githubusercontent.com/tborsa/lectures/master/week2/day2/assets/waiter.jpg)
waiter example

# JS Asynchronous

JavaScript is an asynchronous langauge. Just like a waiter when it has to wait for something, it will continue to do the tasks that it can do. 

The things that Javascript often has to wait for are Input/Output actions or IO for short. 

```javascript
console.log('BEFORE CALL');

setTimeout(() => console.log('INSIDE CALL'), 1000);

console.log('AFTER CALL');
```
## Settimeout SetInteval
Force a wait, or force async behavior.

# Event Queue

Code that can't be run right away gets put in a queue for later execution. 

# Scope

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


## FileSystem

fs is a built in module for working with files on your computer.
Because it is a module we have to include it at the begining of a file in order to use it.

```javascript
var fs = require('fs');
```
It takes some time(relatively) to complete operations on files, so these actions are executed asynchronously. 

### Read


Reading files and writing files takes time 

```Javascript
var fs = require('fs');
fs.readFile('demofile1.html', function(err, data) {
  console.log(data);
});
```


### write
There are different methods for writing data to files with fs. One is. 
```javascript
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
```

writefile replaces the specified file with the specified content. 


## Demo

- What will each output show?
- What will result be equal to?
- How do we get the updated data back? Can we just return it?
- When does higherOrderFunc "end" (finish running) ?
- Since higherOrderFunc finishes "running" before our setTimeout fires, how can the setTimeout callback modify the data local variable? Good opportunity to talk about closures briefly (if you'd like).


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

## Events?
![events](https://raw.githubusercontent.com/tborsa/lectures/master/week2/day2/assets/events.png)
An event is an action on a computer. 
With Javascript we can listen for certain events to see if they happen. 

Node has an event emitter to handle emitting events and to create event handlers that listen for the event to happen. 

FS has events...


Another example of an event 

Events are what trigger the return to action for aysnchronous code. 

We could use stdin as event code. 

```javascript
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  let chunk;
  // Use a loop to make sure we read all available data.
  while ((chunk = process.stdin.read()) !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});
```
