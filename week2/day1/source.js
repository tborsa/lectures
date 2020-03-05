//npm init
//npm i --save-dev mocha
//npm i --save-dev chai
//change test script to mocha
// mkdir test
//touch camelCase.test.js

const should = require('chai').should();
const assert = require('chai').assert;
const expect = require('chai').expect;

describe("our first test", () => {
  it("should fail", () => {
    let thing = true;
    thing.should.equal(true);
  });
});



const camelCase = (input) => {
  // return 'thisIsAString';
  const resultArray = [];
  const words = input.trim().toLowerCase().split(' ');
  resultArray.push(words[0]);
  for (let i = 1; i < words.length; i++) {
    const firstLetter = words[i][0].toUpperCase();
    const remainingLetters = words[i].slice(1);
    const fullWord = `${firstLetter}${remainingLetters}`;
    resultArray.push(fullWord);
  }
  return resultArray.join('');
};

module.exports = camelCase;