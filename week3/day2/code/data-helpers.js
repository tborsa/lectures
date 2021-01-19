// Resource memes
// meme-ory
// image
// top-text
// bottom -text
// description/title
// setup server
const memes = {
    1: {
        id: 1,
        topText: 'when it rains all winter',
        bottomText: 'and you get the first sunny day',
        image: 'https://previews.123rf.com/images/ericulla/ericulla1003/ericulla100300009/6591046-happy-sun-with-glasses.jpg'
    },
    2: {
        id: 2,
        topText: 'when your all out of sunny d',
        bottomText: 'but you find the last bottle in the back of the fridge',
        image: 'https://previews.123rf.com/images/ericulla/ericulla1003/ericulla100300009/6591046-happy-sun-with-glasses.jpg'
    },
}

let idCount = 3;

// BREAD
const getAllMemes = () => {
    return memes;
}

const getAMeme = (id) => {
    return memes[id];
}

// adding a meme
const addMeme = (topText, bottomText, image) => {
    memes[idCount] = {
        topText,
        bottomText,
        image,
        id: idCount
    }
    idCount ++;
}

// deleting a meme
const deleteMeme = (id) => {
    delete memes[id];
}

module.exports = {
    getAllMemes,
    getAMeme,
    addMeme,
    deleteMeme
}