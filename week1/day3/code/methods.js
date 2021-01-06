const castFireball =  function() {
  this.mana -= 2;
  console.log('🔥');
}

const mage = {
  mana: 10, 
  health: 5, 
  name: 'grogar the wise', 
  castFireball: castFireball,
  summary: function() {
    console.log(`the mage ${this.name} has ${this.mana} mana, ${this.health} health`)
  }
}

//this
mage.summary();
mage.castFireball(); //this = mage
mage.summary();

// const cast = mage.castFireball;

// cast(); // this = global object

