const thisTest = {
  one: 1,
  two: 2,
  three: 3,
  checkThisOut: function() {
    console.log(`the current value of this is:`, this , `one: ${this.one}, two: ${this.two}`);
  }
};

let copyOfCheckThisOut = thisTest.checkThisOut;
console.log('the function', copyOfCheckThisOut);

thisTest.checkThisOut();

copyOfCheckThisOut();
