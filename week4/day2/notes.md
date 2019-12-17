

# Client-Side Javascript

![ajax](https://raw.githubusercontent.com/tborsa/lectures/master/week4/day2/assets/javascript.jpg)


Notes and code [here](https://github.com/tborsa/lectures/tree/master/week4/day2)


---

### Topics 📢

![Box](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Lecture/assets/box.png) 

- Client Side JS
 - the DOM
 - events
 - Using DevTools (Sources Tab) & debugger

- JQuery
 - Why does it exist?

---


# Client Side? 🖥

![client](https://raw.githubusercontent.com/tborsa/lectures/master/week4/day2/assets/client.png)

javascript was created as a browser language to make webpages more dynamic! 

In the browser, a user can be doing many things. 

Events are a big part of the browser, and callbacks / async code is everywhere

---

# The DOM 

![heirarchy](https://raw.githubusercontent.com/tborsa/lectures/master/week4/day2/assets/domheirarchy.svg)

Document Object Model 

Each element of a webpage is represented as an Object or Node

The event object
The window object
The navigator object
The document object

Each Object/Node has properties and methods that allow you to programmatically change the style or content of that node. 


---

# The DOM Tree 🎄

![tree](https://raw.githubusercontent.com/tborsa/lectures/master/week4/day2/assets/domtree.png)

Browsers treat the HTML document as a tree structure wherein each node is an object representing a part of the document.

Through DOM methods you can change the structure, style or content of the document tree.

# History

![wars](https://raw.githubusercontent.com/tborsa/lectures/master/week4/day2/assets/browserwar.png)


It was the "browser wars" of the late 1990s. The titans of the web, Netscape Navigator and Microsoft Internet Explorer were both pioneering new implements of war. First Netscape revealed Javascript an asynchronous language that allowed the browser to run client-side code. Not to be outdone, Microsoft, quickly learning from its competitor, released JScript its own reimplementation of JavaScript. With these new scripting languages unleashed, advocates of both sides began modifying HTML documents and implementing limited facilities for detecting user-generated events. Little did they know, this pairing of JavaScript/Jscript and HTML documents would become known as the "Legacy DOM". Legacy DOM was limited in the kinds of elements that it could access, but powerful nonetheless. 

The war raged on, quickly becoming a battle of the DOM. Each browser fighting, desperate for World Wide Web Supremacy. Each side pushing the limits of what was browser possible. This is where the "Intermediate DOM" was born, molded. 
Eventually, the battle of the DOM grew too much! Someone had to step in. With the standardization of ECMAScript, the W3C decided to intervene. A W3C DOM Working Group began drafting a standard DOM specification so that DOM use would be safely regulated and controlled henceforth. And thus "DOM Level 1" immerged allowing for more consistent development across browsers. 

## Demo manipulate website

---

![asyncdefer](https://raw.githubusercontent.com/tborsa/lectures/master/week4/day2/assets/asyncdefer.jpg)

# Include Scripts 



---

# Events 🎪

Events and event propagation

events are actions (functions) that occur as a result of the user action or as a result of the state change of the elements of a DOM tree.

Nodes can have event handlers attached to them. Once an event is triggered, the event handlers get executed.

Dom events are related to user actions. 

We can listen for:

- Mouse
- Keyboard
- Form Events
- 

When we 'handle' an event we are passed an event object. 
The event object has information about the event including what DOM element the event occurred to the 'target' the type of event, and when the event occurred. 

---

# JQuery ❓

jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

Released in 2006 

- HTML/DOM manipulation
- CSS manipulation
- HTML event methods
- Effects and animations
- AJAX
- Utilities

How much additional behavior does it add to the browser?

---

# Why Jquery

Why is it important to learn / use jQuery ?

more than 55% of the 10,000 most-visited websites use jQuery, it is the most popular JavaScript library being used today.

Highly extendable, plugins for almost anything you need to do. 

Although not as important as it once was.

Current browser javascript API's are very consistent and are continually being improved. 

# Library vs Framework 📚🥊 🖼

Library or framework? Why?

