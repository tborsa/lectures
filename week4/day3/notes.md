

# AJAX

![ajax](https://raw.githubusercontent.com/tborsa/lectures/master/week4/day3/assets/ajax.jpg)


Notes and code [here](https://github.com/tborsa/lectures/tree/master/week4/day3)


---

### Topics 📢

![Box](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Lecture/assets/box.png) 

- Browser & AJAX
- Why use AJAX
- Fallbacks
- AJAX Response
- CORS

---


# What is AJAX? 🎊

![jax](https://raw.githubusercontent.com/tborsa/lectures/master/week4/day3/assets/jax.jpg)

AJAX stands for Asynchronous JavaScript and XML.

- It allows you to send and receive data from a server asynchronously.
- Practically this means you can change content dynamically without reloading the page!

AJAX is the combination of the browser XMLHTTPRequest object and client-side js and HTML.

AJAX requests can be done in pure Javascript, but for our purposes, we will look at AJAX with JQuery. 

---

## DEMO

---

# The Browser and AJAX 🖼

![history](https://raw.githubusercontent.com/tborsa/lectures/master/week4/day3/assets/browsers.jpg)

Browsers track what sites have been visited, and when.

An asynchronous request does not add to the History!

Using AJAX you lose: 

 - history (back, forward) 
 - URL pathing for differnt 'pages'

 Pros Cons

However, browsers provide a history API that you can use to interact with the 
Browser history.

The history object is part of the window object and is accessed through the window.history property.

https://css-tricks.com/using-the-html5-history-api

---

# Why use AJAX 🤷‍

![ajax](https://raw.githubusercontent.com/tborsa/lectures/master/week4/day3/assets/ajaxinfo.jpg)

When does it make sense to use AJAX?

PROS?

 - SPA's
 - Performance?
   - front-weighted resource loads, or spread throughout the application
 - User does not get a noticeable page to reload

CONS?

- Accessibility and dynamic content is tricky
- Asynchronous programming patterns are more complex to code
- It requires js and XMLHTTPRequest support
- History is not automatically updated 


---

# Fallbacks? 📼

AJAX is dependent both on Javascript and the XMLHttpRequest browser object. 

Javascript itself is supported by all browsers and enabled by default. 
But! 
 - users can disable javascript.
 - really old browsers do not have XMLHttpRequest support

https://caniuse.com/#search=XMLHttpRequest
https://caniuse.com/#search=fetch

Users disable javascript sometimes for...
- Speed and bandwidth
- Usability & Accessibility
- Old Compatibility issues
- Security
   - what can js do?

*Not a simple decision on whether to have ajax fallbacks

---

# Ajax response 📬

What can AJAX return?

- JSON
- XML
   - xhtml -> html

AJAX response data doesn't have to be JSON, in many apps it's rendered HTML
- Github projects

---

# CORS 📥📤

![Cors](https://raw.githubusercontent.com/tborsa/lectures/master/week4/day3/assets/cors.png)

Cross-Origin Resource Sharing

## Cross-Origin Request:

An HTTP request to a server that did not serve the original webpage.

If the original GET request to host:port/path is to server A, then any request from the client to a server that is not server A is a Cross-Origin request

CORS makes up a set of Browser/server enforced standards to restrict (or allow) Cross-origin requests.
CORS uses request headers to communicate authorization. 

"The CORS standard describes new HTTP headers which provide browsers a way to request remote URLs only when they have permission. Although some validation and authorization can be performed by the server, it is generally the browser's responsibility to support these headers and honor the restrictions they impose."

This can make it harder to request different API's client-side but can often be solved by setting the correct headers. 
```
headers: {'Access-Control-Allow-Origin': '*'}
```