# W3D1 - INTRO TO SERVERS
![webserver](https://raw.githubusercontent.com/tborsa/lectures/master/week3/day1/assets/server.gif)

Notes and code can be found [Here](https://github.com/tborsa/lectures/tree/master/week3/day1)

The notes that we wrote in class can be found in the `notes.md` file.

# HTTP review

## Request and Response

 There are two parties. A server that sits at home waiting for someone to knock on their door and a client that can at any time walk up to the door, knock and ask for something.

---

#  🚪🚶‍

The server sits at home waiting for someone to knock on their door.

---

# 💃 🚪🚶‍
 
The client can ask for a cup of sugar, flour ..

All the client needs is a way to ask, and a thing to ask for.  
'May I please have a cup of sugar?' might be better than 'Give me that sugar!'.

---

# 🚣 🍬

The server will go into their kitchen to grab a cup of sugar. 

---

# 💃🚪🤾 

The server then makes a response. They can come back with the thing that was asked for or they could also come back and say 'I couldn't find that.' to the client

---

# 💁 🍬 🧒

This is what happens when you type a URL into your browser.

---

## Stateless Protocol
![goldfish](https://raw.githubusercontent.com/tborsa/lectures/master/week3/day1/assets/goldfish.webp)

HTTP is a state-less protocol
  - no ongoing communication
  - ask for thing, get thing, end transmission
  - everything that the server needs to form a response needs to be sent with the request
  - how do we pack useful info into the request and then how does the server read that useful info?

HTTP is a resource based protocol. So when you make HTTP requests keep in mind that the requests are always _for something_.

# Intro to Web Servers

![webserver](https://raw.githubusercontent.com/tborsa/lectures/master/week3/day1/assets/web-server.svg)

A web server is:
- a program that is configured to recieve http requests!
- The Hardware/Computerthat runs the web server software, and stores files/resources. 

Lets build our first web server. 


# Review

What were the problems with out basic http server?


So....

# Intro to Express
![Express](https://raw.githubusercontent.com/tborsa/lectures/master/week3/day1/assets/express.jpg)

Express is a routing and middleware web framework for Web servers!

Express has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

Practically Express makes routing and managing incomming http requests easier. 

Express is good for:
1) Routing
    - "I'm trying to find a resource... it kind of looks like this..."
    - Pattern matching of routes + resources
2) Middleware
    - anything that needs to happen between the request and the response

# What is "middleware?"
![Express](https://raw.githubusercontent.com/tborsa/lectures/master/week3/day1/assets/middle.jpg)
Middleware
    - anything that needs to happen between the request and the response
    - e.g. 
        - parsing form data into easier-to-use formats
        - authenticating requests
        - logging
        - cookies

Middleware are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. 

![assembly line](https://raw.githubusercontent.com/tborsa/lectures/master/week3/day1/assets/assemblyline.gif)

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.
- If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

to use middleware you use the .use function of your express server

```js
app.use(express.static('public'));
```

# Our Express server

With Express we saw that it's fairly simple to set up new routes. We can even set up general **patterns** for routes that Express will use to *match* to requests. For example...

```js
app.get('/people/:id', function(req, res) {
    let id = req.params.id // I can get his parameter
    let person = // ... find user by id ...
    res.json({person: person}) // or some other response
})
```


# view templates with EJS
![template](https://raw.githubusercontent.com/tborsa/lectures/master/week3/day1/assets/template.jpg)
Often we'll want our web servers to return HTML pages containing informatin that might have been pulled from a database, another API, etc. 
In these cases, we'd like to have a **"template"** system that lets us specify the general form of certain web pages (e.g. a profile page) which we can fill in with the required data.
    
    TEMPLATE ENGINE:
        ---> Give me data
        ---> Fill in the template with
            - title
            - images
            - authors
            - edit status (e.g. locked, open)
        ---> RETURNS AN HTML FILE EVENTUALLY
    
The template engine we're using is EJS. EJS lets us embed arbitrary Javascript expressions, and it also lets up easily pass in template variables into the render function. Take a look at the `views` folder in the `express_demo` project to see examples of using EJS.

Here's a bit of a cheat sheet:

```
<h1><%= hello %></h1>

<% for (let i = 0; i < 10; i++) { %>
    <h1>WOOP WOOP</h1>
<% } %>
```


# Additional Resources Here:

1. [Express: Getting Started](https://expressjs.com/en/starter/installing.html) 
2. [Routing with Express.js](https://expressjs.com/en/guide/routing.html) 
3. [EJS templating](http://ejs.co/)
4. [What is Express Middleware?](https://expressjs.com/en/guide/using-middleware.html)
5. [How do I write middleware?](https://expressjs.com/en/guide/writing-middleware.html)
6. [Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
7. [Using EJS with Express](https://github.com/mde/ejs/wiki/Using-EJS-with-Express)