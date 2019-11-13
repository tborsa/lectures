

# Intro to CSS

![css](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Lecture/assets/css.gif)

Notes and code [here](https://github.com/tborsa/lectures/tree/master/week4/day1)


---

### Topics 📢

![Box](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Lecture/assets/box.png) 

- Writing semantic HTML
- Cascading Style Sheets
- Reset / Normalize
- Box Model
- Block level elements vs inline elements and their nesting
- Float
- Modern CSS


---

## Back at it again with the Bootcamp

⏫ More new Concepts!

⏫ More chance for you to explore and find material!

📚The Course is going to be less direct in its guidance. 

This means that during lecture if/when a new concept comes up that you don't fully understand, consider writing it down and researching it post-lecture. There are too many new things that you'll encounter directly or tangentially in morning lecture for everyone to ask "What's XYZ?". That is a question to explore with Google first.   
We're happy to discuss XYZ with you once you've spent some time trying to understand it for yourself.

---

## Tweeter 🐦

We will work a little more on the front end and styling with html and css with this project.

DEMO

---

## What we are focusing on? 🔬

- Look at css and the box model and get a history of css.

- CSS Box model is the focus for today, it still has many confusion parts, and many hacks. You'll encounter some this week. For this reason, you really need to (especially at first) "poke things until they work".

- We have to understand the "older" box model first before we look at the new stuff.

---

## what we are not focusing on today? ❌🔬

- we are not looking at css frameworks
Bootstrap (CSS/UI grid frameworks in general) comes later. It makes more sense to focus on vanilla CSS.
- SCSS (also known as Sass) is a better way to write CSS, and there are other alternatives to it. You'll be learning SCSS in Week 4 to implement your Midterm (requirement).
- we are not focusing on html
   - do want to look at semantic html

---

## Semantic html

The Idea that an html tag should be expressive about what content it holds.
Tags whose names describe their purpose.

For example using `<strong>` tag instead of `<b>`

---

```HTML
<div>Rocks</div>
<div>
   Rocks are cool
   <div>
       🗿
   </div>
</div>
<div></div>
```
---

```HTML
<header>Rocks</header>
<article>
   Rocks are cool
   <figure>
       🗿
   </figure>
</article>
<footer></footer>
```

---


# TOOLS 🔧🔨

- Chrome 
   - Developer tools 
DevTools is your biggest friend with front-end development

<!-- cross out vs grey out(div is see through) -->

---

# CSS 📃

![waterfall](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Lecture/assets/waterfall.gif)

Cascading Style Sheets

- Acts like a tiered waterfall
   styles cascade or flow downwards adding to the styles below them.

The cascading algorithm determines how to find the value(style) to apply for each property for each document element.

---

## Applying Styles

Embedded

``` HTML
<style>.inner{font-weight: 700;} </style>
```

External StyleSheet*

```HTML
<link rel="stylesheet" href="waterfall.css">
```

```CSS
.inner{
   font-weight: 700;
   color: snow;
}
```

Inline

``` HTML
<div class="box inner four" style="color: coral"></div>

```
DEMO

* Embedded and External style sheets are applied in the order that they appear in the HTML document. You should think about the order that you want things applied. Sort of


---
# Syntax

```CSS
selector list{
   property: value,
}
```
---

## IDs Vs Classes 🔖

🎣 Hooks to grab elements in order to apply style to them.

When to use IDs vs Classes

Classes
- Same class on multiple elements
- Multiple classes on one element

```HTML
<div class="shaman"></div>
<div class="rogue"></div>
```

IDs are unique
- each element can have at most one ID
- You should have only one element with a particular ID
- secret browser power url#idname

```HTML
<div id="introduction"></div>
```


** Elements can have both classes and ID's

There is nothing you can do with a class in css that you can do with an ID and vise versa


---

# Selectors

Way we use tags, ID's, Classes to apply CSS to them.

``` CSS
div, .primary {

}
```
``` CSS
div.primary {

}
```
```CSS
div .primary {

}
```

https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors

---

# Reset / Normalize

![reset](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Lecture/assets/reset.gif)

Reset  
A reset is removing any default browser styling, often called the user agent stylesheet.
The Goal is to remove any browser inconsistencies.

https://meyerweb.com/eric/tools/css/reset/


Normalize

>"Resets impose a homogenous visual style by flattening the default styles for almost all elements. In contrast, normalize.css retains many useful default browser styles. This means that you don’t have to redeclare styles for all the common typographic elements."

- Preserves user defaults
- Corrects common bugs

http://nicolasgallagher.com/about-normalize-css/

---

# Box Model 📦

![Box Model](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Lecture/assets/boxmodel.png)

Margin -> { Border -> Padding -> Content }

DEMO boxes

```CSS
*, *:before, *:after {
   border: 4px solid red;
}
```

http://guyroutledge.github.io/box-model/

---

# Box Sizing 📦📏

DEMO How big is this box

http://guyroutledge.github.io/box-model/


---

## Box Sizing contd

Content-box
- Height/Width = Content Size.
- Padding & Border additionally add to the size of the box.
- Cannot set total box size.

Border-box?
- Height/Width = Content Size + Padding + Border.
- Padding & Border accounted for in size.
- Width/Height sets total box size.

It is better to use border-box

```CSS
*{
   Box-sizing: border-box; //(non-default)
}
```

---

# Block vs Inline

Block Level: 
- Starts on a new line
- Takes as much width as it can by default
- Structural
- Default: `<div>,<h1>-<h6>,<p>,<ul>,<nav>`

Inline:  
- Does not start on a new line
- Doesn't affect the elements around it
- Can't set width or height ext..
- Content related
- Default: `<span>,<a>,<input>,<button>,<img>`

Demo

---

## Nesting 🐣

__Don't__ put block elements inside inline elements
```HTML
   <a><div>Block</div></a>
```
* can cause inconsistent render, conflict between properties
** is a violation of html standards

__DO__ put inline inside block

```HTML
  <div> <a>Inline</a></div>
```

Block and Inline are display properties, and can be changed in CSS 
```CSS
   p{
       display: block;
   }
```
*another display property is inline-block.

---

# Specificity

![Specificity](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Breakout/assets/specificity1.png)

When two competing styles are applied to an element the one with the higher priority specificity gets applied.

A style with 0,0,2,1 (2 classes and 1 element tag) would be applied over a style of 0,0,1,1 (1 class and 1 element tag).

What is the 'score' of ...
```CSS
div.box.left{
 color: blue;
}
```

# Selector battle

<span style="color: red">red</span> vs. <span style="color: blue">blue</span>

```CSS
#red{
 color: red;
}
```
## VS

```CSS
div.blue.ocean{
 color: blue;
}
```

---

```CSS
div a.red{
 color: red;
}
```
## VS

```CSS
.blue.ocean{
 color: blue;
}
```

---

```CSS
div.box.left{
 color: red;
}
```
## VS

```CSS
div.box.left{
 color: blue;
}
```

---

# Too specific

![Specific](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Breakout/assets/ricknmorty.gif)

When are your selectors too specific?

```CSS
div a p > a.link.underline#home{
 text-decoration: underline;
}
```
- use ID's sparingly
- If you don't need a selector don't use it.

---

## Simple is better

In general you want to be light handed with classes and id's.


if we want our links to look a certain way

```HTML
<a href="www.nima.com" class="link"> </a>

```

instead we know it will be an `<a>` tag so

```HTML
<a href="wwww.nima.com" ></a>

```

---

## !important

```CSS
div{
   color: red !important;
}
```
- Important will move the style to the top of the specificity hierarchy.


- If everything is important than nothing is important

- If two elements are important than you look at specificity.

---


# Stylin Style 😎

Style of CSS should be:

``` CSS
selector {
 /* 2 spaces for indentation, as with everything else */
 key1: value;
 key2: value;
}
```

---

# Float ⛵

![Magazine](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Lecture/assets/magazine.jpg)

Magazine layout => web layout

```CSS
   div{
       float: left; //or left or right
   }
```

DEMO

clear floats 
When we want our elements to start after an element that has been floated we have to *clear* the float.

```CSS
   div{
       clear: both; //or left or right
   }
```

Inline-Block  
- Behaves like inline but you can set the width and height.
- Like Block but does not add a line break after the element.

---

# Looking into the Future/Present 🔭

## Flexbox 💪🍱

Aims to correct some of the frustrating parts of the box model by rewriting how we layout the page, but it is not yet universally adopted (sorta).

Box Model is far more common as a layout engine, and is something you need to know.

Flex box is widely supported: http://caniuse.com/#feat=flexbox

Good to know the box-model and the evolution of CSS
before flexbox.

---

## CSS Grid 📰

![CSS GRID](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Lecture/assets/grid.png)

It is even newer than Flexbox, but isn't well-adopted yet. It is something you can learn on your own (and it is recommended that you do so).

https://caniuse.com/#search=css%20grid

---

## Resources

- MDN
- CSS-Tricks is also great 
Add MDN to all of your search queries in Google to get MDN-focused results

### Topics 📢

- Position
- ID's & Classes
- Selectors
- Specificity
- Frameworks

---

## TRBL
When using shorthand to set the style attribute of a top, right, bottom, left property the order is.

TRBL

```css
div{
 margin: 15 10 15 10;
 padding: 5 10 5 10;
}
```
---

# Position
The position property specifies the type of positioning method used for an element
- static  
  - default
  - cannot set top, right, bottom , or left
- relative
  - TRBL can be set to change position relative to where it would have been statically positioned.
- absolute
  - TRBL can be set to change position relative to the nearest positioned ancestor, or the html body.
- fixed
  - TRBL is set relative to the viewport so the element stays in the same position even when content is scrolled.

- sticky

---

# Frameworks


- Bootstrap
- Semantic UI
- Materialize



