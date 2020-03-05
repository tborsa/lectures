# TDD w/ Mocha and Chai
![mochachai](https://raw.githubusercontent.com/tborsa/lectures/master/week2/day1/assets/mochachai.gif)

Notes and code can be found [Here](https://github.com/tborsa/lectures/tree/master/week2/day1)

# Topics 📢
- Testing
- TDD
- NPM
- Mocha & Chai


# Testing Review

You have been writing assertions since early in the bootcamp, what is the purpose of writing tests?

What are some benefits?

What are Assertions?

# TDD

![TDD](https://raw.githubusercontent.com/tborsa/lectures/master/week2/day1/assets/TDD.png)

Stands for Test Driven Development. 

It is the process of writing tests for requirements/features before you write the code for that requirement/feature. 

Red Green Cyle

0. Decide/Recieve project requirements

1. Write a test for a requirement that fails (RED)
2. Write code until that test passes (GREEN)
  - Refactor code (RED/GREEN)
3. Repeat

These short development cycles allow for continual feedback.

Code that is not for a requirement/test is not written. 

## Modules?
![modules](https://raw.githubusercontent.com/tborsa/lectures/master/week2/day1/assets/modules.png)

- A file(code) that can be used in another file(code).
- A module(file) has it's own scope
- You need to specify what will be exported from the file to be used in other files.

### CommonJS

Module standard for JS

Bring in modules with

```js
const thing = require('filename');
```

Export things from a file

```js
module.exports = {
  thing: 1
}
```

# NPM
![npm](https://raw.githubusercontent.com/tborsa/lectures/master/week2/day1/assets/npm.png)

Node Package Manager.
- makes it easy to install and manage node modules
- package.json file
- manages dependencies

Ecosystem of modules or packages that we can bring into our project to use. 
We benefit from the code that others have written. Don't reinvent the wheel. 

# Mocha

Mocha is a testing framework for the javascript node enviornment. 
Mocha is a test runner. 
  - Organizes tests
    - has a specific folder that it looks in to find tests
  - executes tests
    - provides clear feedback on the state of tests
Mocha is a node module.
Mocha does not have it's own assertions. 

Gives us ways of describing our tests so that they are clear and readable to the test runner. 

__describe__ gives context for a group of test cases. (often a function)
__it__ describes a specific test case that can pass or fail. 


# Chai 

- Chai is an assertion library. 
- Chai is a node module.
- We will use Chai with Mocha for our assertions. 
  - Helps us verify that things are correct. 
    - less if statements

Given a value x we want it to look like "y"

Chai provides gives us different assertion flavours/styles. What you use is a matter of preference.(yours and your teams)

1. Assert style
```js
var assert = require('chai').assert;
var numbers = [1, 2, 3, 4, 5];

assert.isArray(numbers, 'is array of numbers');
assert.include(numbers, 2, 'array contains 2');
assert.lengthOf(numbers, 5, 'array contains 5 numbers');
```
2. Expect style
```js
var expect = require('chai').expect;
var numbers = [1, 2, 3, 4, 5];

expect(numbers).to.be.an('array').that.includes(2);
expect(numbers).to.have.lengthOf(5);
```
3. Should style
```js
var should = require('chai').should();
var numbers = [1, 2, 3, 4, 5];

numbers.should.be.an('array').that.includes(2);
numbers.should.have.lengthOf(5);
```


