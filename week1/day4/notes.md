# Callbacks

![callbacks](https://raw.githubusercontent.com/tborsa/lectures/master/week1/day4/assets/phone-ring.gif)

[Lecture notes and code](https://github.com/tborsa/lectures/tree/master/week1/day4)


[Lecture Playlist](https://open.spotify.com/playlist/5joVb9AC4utsNgcdqGxb7v?si=hEVGu7VXTAyunS2JUPCimg)

# Topics
- Functions are values
- Function declaration vs function expression
- What are anonymous functions? (example)
- Arrow Functions
- Function calling vs passing (reference to a function)
- Callback functions and Higher order functions

# Values
Yesterday you looked at variables and how javascript stores values. 
Javascipt values can be stored as a primitive type or by reference. 
How are functions stored?

We have been creating and using functions

```javascript
//create a function
function howdy(){
  console.log("hows it going?");
}
//use it
howdy();
```

But functions are a value as well, the value of the function itself can also be accessed with.

```javascript
howdy;
```

# Anonymous function

It is also possible in JavaScript to create a function without a name. 

```javascript
function(){
  console.log("you can't call me");
}
```
This is known as an anonymous function. 
Because it has no name we don't have a way to call the function in the above example. 

We can however give an anonymous function a name so we can use it. 

# Functional Expression vs Declaration

You can create a function as a declaration or as an expression.

A functional declaration is:
```javascript
function howdy(){
  console.log("hey there pardner");
}
```
With a functional expression we assign a name to an anonymous function:

```javascript
const howdy = function(){
  console.log("hey there pardner");
}
```
In both cases you can access the function by the name __howdy__ and call the function with __howdy()__

The is one difference between function declarations and function expressions is...

>You can't use a hoisted Functional expression.

  Meaning you cannot call a functional expression before it is declared. 

```javascript
howdy(); //valid
function howdy(){
  console.log("hey there pardner");
}
```

```javascript
howdy(); //not valid
const howdy = function(){
  console.log("hey there pardner");
}
```


# Arrow Functions (and their common use for callback functions)
![arrow](https://raw.githubusercontent.com/tborsa/lectures/master/week1/day4/assets/arrow.gif)

Another way to declare a function is using the arrow function syntax.

```javascript
const howdy = () => {
  console.log("hey there pardner");
}
```

There are some differences, involving more complex programming patterns that we will look at later, between using an arrow function and the `function` keyword. For now we can think of arrow functions as a cleaner way to declare functions. 

# Callbacks

A Callback is a function passed as a parameter (object) to another function.

ex.

```javascript
let classes = [
  {name: 'wizard', primaryAbility: 'intelligence'}, 
  {name: 'barbarian', primaryAbility: 'strength'}, 
  {name: 'bard', primaryAbility: 'charisma'}, 
  {name: 'rogue', primaryAbility: 'dexterity'}, 
  {name: 'druid', primaryAbility: 'wisdom'}
];

let printClassDetials = (class) => {
  console.log(class.name + ' primary ability is ' + class.primaryAbility);
};

classes.forEach(printClassDetails);

```

# DEMO Why they exist
Implementing our own forEach and/or our own filter


# Single Responsibility Principle:
![assemblyline](https://raw.githubusercontent.com/tborsa/lectures/master/week1/day4/assets/assemblyline.gif)

A function should have a sole reason to exist, and delegate other responsibilities to other functions as needed.

These two functions (the callback vs the higher-order function) now each have a single, more concise responsibility, instead of doing both things. This is the most important reason for creating HO functions.


# Nested scope and "scope chain"

We can think of 'scope' as the set of variables accessable from a function or block of code.

```javascript
  let weather = 'sunny';
  let indoorActivity = 'play starcraft';
  let outdoorActivity = 'climb';

  if (weather === 'sunny') {
    // Fo this code the variables in scope are [weather, indoorActivity, outdoorActivity]
    console.log("you should " + outdoorActivity);
  } else {
    console.log("you should " + indoorActivity);
  }

```

Every variable that we declare has either local or global scope.

Global scoped variables are defined in the root of a documdent, outside of any function and can be accessed/used by all of the code in the file. 

Local scoped variables are defined within a function, and can be used by any code inside of that function. 

```javascript
  let weather = 'sunny'; // global scope

  const decideWhatToDo = (weather) => {
    let indoorActivity = 'play starcraft'; // local scope
    let outdoorActivity = 'climb'; // local scope
    if (weather === 'sunny') {
      console.log("you should " + outdoorActivity);
    } else {
      console.log("you should " + indoorActivity);
    }
  };

  decideWhatToDo(weather);

```

To find the 'scope' for a certain line of code we have to look at all the local sopes that the code has access to + the global scope. This is sometimes referred to as a scope chain (localScope + localScope + ... + globalScope).


Each time you attempt to access a variable within a function’s execution context, the look-up process will always begin with its own variable object. If the identifier is not found in the variable object, the search continues into the scope chain. It will climb up the scope chain examining the variable object of every execution context looking for a match to the variable name.

