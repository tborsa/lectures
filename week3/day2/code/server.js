const { Template } = require('ejs');
const express = require('express');
const { some } = require('methods');
const dataHelpers = require('./data-helpers.js');
const bodyParser = require('body-parser');
// recieves the body => converts it into js object for us to use

const app = express();
const PORT = 3001;

app.set('view engine', 'ejs');
// use means using middleware
app.use(bodyParser.urlencoded({extended: true}));


// BREAD actions/routes
// html file vs template (html + data)
// ORDER routes from most specific to least specific
// browse (view all of a resource)
// method, path (url path)
app.get('/memes', (req, res) => {
    const memes = dataHelpers.getAllMemes();
    const templateVars = {memes: memes};
    res.render('index', templateVars);
});
// Edit (of a single resource)
// similar to add routes

// Add (add a new resource)
//  :id  :something
app.get('/memes/new', (req, res) => {
    res.render('new');
})

app.post('/memes', (req, res) => {
    // hendle adding the meme
    // body parser makes the body available in req.body as js object
    dataHelpers.addMeme(req.body.topText, req.body.bottomText, req.body.image);
    res.redirect('/memes');
})

// Read (viewing a single resource)
// :thing => pattern matching route
app.get('/memes/:id', (req, res) => {
    const meme = dataHelpers.getAMeme(req.params.id);
    const templateVars = {meme: meme, greeting: 'hello world', users: 5};
    res.render('show', templateVars);
})

// Delete(a resource)
// GET, POST,   => extra  PUT, DELETE
app.post('/memes/:id/delete', (req, res) => {
    dataHelpers.deleteMeme(req.params.id);
    res.redirect('/memes');
})

// start app
app.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`);
})