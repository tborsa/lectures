const breadRecipes = {
  1: {
    ingredients: ['white flour'],
    name: "White bread",
    directions: "bake the dough",
    cost: '$',
    time: "1hr",
    yeild: '1',
    lifestory: "my mum made this"
  },
  2: {
    ingredients: ['Wholewheat flour'],
    name: "Wholewheat bread",
    directions: "bake the dough",
    cost: '$',
    time: "1hr",
    yeild: '1',
    lifestory: "I was raised by a loaf of bread"
  }
};


const addRecipe = (recipe) => {
  let ids = Object.keys(breadRecipes)
  let newId = ids[ids.length - 1] + 1;
  breadRecipes[newId] = recipe;
}

const editRecipe = (recipe, id) => {
  // overwrite
  breadRecipes[id] = recipe;
  // selective edit
  // breadRecipes[id] = {...breadRecipes[id], ...recipe};
}



const deleteRecipe = (id) => {
  delete breadRecipes[id];
}

module.exports = {
  breadRecipes: breadRecipes, // or breadRecipes
  addRecipe,
  deleteRecipe,
  editRecipe
  // other helper functions
}