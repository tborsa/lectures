
# Objects in JS

![objects](https://raw.githubusercontent.com/tborsa/lectures/master/week1/day3/assets/objects.jpg)

# Topics
- Primitive data types  
- Objects Fundamentals  
- Functions as object methods  

# Live Coding  

Don't try to replicate the same code on their screen and instead be paying attention and collaborating/questioning the code that's being written on screen.

This discussion is meant to facilitate a deeper learning of the coding concepts, where as a simple "repeat after me" lecture would not have students discussing the concepts presented in depth.

# Objects

![phonebook](https://raw.githubusercontent.com/tborsa/lectures/master/week1/day3/assets/phonebook.jpg)

Objects are a way of remembering/storing information in JavaScript.

other names:  Associative array, map, dictionary, hash

In JS objects are similar to phonebooks, dictionaries, or group mail boxes in RL.
An object is a structure for storing key value pairs

```ruby
           key           value
--------------------------------------------
phonebook:  Name          phone number
dictionary: Word          definition
mailbox:    box number    box contents
js Object:  String        Any JS value

```

In js you use any string identifier as a key
and can store any js value as the value.

## Syntax

An object might have a key "dog" with the value "lola".

```javascript
let obj = {
   dog: "lola"
}
```

An object can have many key value pairs, and each value can be anything.

```javascript
let obj = {
   dog: "lola",
   num: 5,
   groceryList: ["bread","milk","jam"]
}
```

For our object to be useful we need:  
- A way of adding new data(key value pairs).  
- A way of retrieving current data.  

## Getting

given an object  

```javascript
let obj = {
   dog: "lola",
   num: 5,
   groceryList: ["bread","milk","jam"]
}
```

Data can be retrieved with:

```javascript
obj.dog //=> "lola"
```

or

```javascript
obj["dog"] //=> "lola"
```

The second option is similar to how we get values from arrays but instead of getting the value indexed at a number we are getting a value indexed at "dog".

## Setting
we can set or edit a key value pair in a similar way.

```javascript
let obj = {cat: "noname"};
obj.cat = "apple"; //=> {cat: "apple"}
//or
obj["catTwo"] = "tigger"; //=> {cat: "apple", catTwo: "tigger}
```

In either case if the key does not exist it will create a new key value pair.
while if the key does exist it will replace it's value with a new value

## Dynamic keys

![box](https://raw.githubusercontent.com/tborsa/lectures/master/week1/day3/assets/box.jpg)

Why the different syntax for setting and getting?

They are to allow for dynamic keys.

```javascript
let obj = {cat: "apple", dog: "lola"};
let thing = "dog"

obj[thing] //=> "lola"
//vs
obj.thing //=> null
```

# Dynamic

```javascript
const bank = {key1: '25$', key2: '30$', key3: '40$', }
const box = 'key1';

obj[box] //=> "monies"
```

## 🕺 🔑 📥 📦   ⏩ 🧑 
## 🤽 🏦 
## 🧑📦 ⏩ 👮 📤 🔑 📬 
## 👮 💰 ⏩ 🧑 
## 🧑 💰 ⏩ 🕺


# Not Dynamic

```javascript
obj.box //=> null
```

##  🕺 🔑 📥 📦 ⏩ 🧑 
## 🤽 🏦 
## 📦 ⏩ 💂 "📦" 📭
## 👮 🚫 ⏩ 🧑 
## 🧑 🚫 ⏩ 😡

Your friend gives you a key for his bank box and asks you to get out his money.

# Methods

We can also assign functions as values in objects.

```javascript
let obj = {
 thing: 5,
 sayHello: function(){
   console.log("Hello");
 }
}
//to call the function
obj.sayHello();
```

A function inside of an object is called a method.

## practice

*It is important to understand how to set and get object data.
I encourage you to play around in the console until you are very comfortable with doing so.

# Why Objects

Faster to 'lookup' a particular piece of data than arrays are, 
key value pairs. 

# Primitive types

![primative](https://raw.githubusercontent.com/tborsa/lectures/master/week1/day3/assets/primative.png)

The variable is the value stored.

If

```javascript
let a = 5;
```

then a => 5

# Reference types
The variables stores a reference to the value.

if

```javascript
let b = { thing: 5};
```

then b => ⏩ to {thing: 5}

b is a reference(also called a pointer) to the object.


# Sharing

When we pass a variable to a function or assign it to another variable it behaves differently if is is a primitive/value type than if it is a reference type.

For primitive types when we share a variable we give a copy of that value.

```javascript
let a = 5;
let b = a;
```

then a =>5, and b =>5 both are the value 5.

Where as with reference types we share the reference value.

```javascript
let a = { thing: 5};
let b = a;
```

then a => ⏩, and b => ⏩
both a and b are the reference ⏩

and ⏩ => {thing: 5}
Because of this with objects, when we share the reference we can update the object but we cannot reassign/erase the original reference.

With both primitive types and reference types a similar thing happens when the variable is passed to a function.

## Passed by Sharing

```javascript
const replace = function(ref) {
   ref = {};           // this code does _not_ affect the object passed
};

const update = function(ref) {
   ref.key = 'newvalue';  // this code _does_ affect the _contents_ of the object
};

const a = { key: 'value' };
replace(a);  // a still has its original value - it's unmodified
update(a);   // the _contents_ of 'a' are changed
```

# This

This is a special keyword within javascript.

This has different values depending on where it is used.

This wants to refer to an owner object.

If this is used in a method then it is happy and can refer to the object that the method exists in.

```javascript
const obj = {
 thing: 1,
 myFunc: function(){
   console.log(this);
 }
}
// this refers to obj
```

If this is used in a normal function it will check what this was equal to where the function was called and will equal that.

```javascript
.
.
.
console.log(this);
//==> Whatever this equals here
const myFunc = function(){
   //==> Will be the same value of this here
   console.log(this);
}
.
.
.
// both console logs will log the same this
// the value of this depends on where this code is
```

If this is called outside of any object it will refer to the global object, in node applications this will be the module object.

```javascript
console.log(this);
//this will refer to the global object/node module
```

In summary:
> Context === this

Explain how it is tied to objects that functions are defined on:

``` javascript
const famousPerson = {
 firstName: 'Kanye',
 lastName:  'West',

 fullName: function() {
   return `${this.firstName} ${this.lastName}`;
 }
}

console.log(famousPerson.fullName());
```



