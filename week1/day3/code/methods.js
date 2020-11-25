const mage = {
  hp: 10, 
  intellect: 15,
  mana: 5, 
  castFireball: function () {
    this.mana --;
    console.log('🔥');
  },
  playerSummary: function() {
    console.log('what is this', this);
    console.log(`hp: ${this.hp}, intellect: ${this.intellect}, mana: ${this.mana}`);
  }
}

// console.log('global scope this', this);

const playerSummaryCopy = mage.playerSummary;
playerSummaryCopy();

mage.castFireball();
mage.playerSummary();
