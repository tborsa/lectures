const camelCase = require('../camelCase');
const should = require('chai').should();

describe('camelCase function', () => {

  it(`should return "thisIsAString" given "this is a string" `, () => {
    let result = camelCase("this is a string");
    result.should.equal("thisIsAString");
  });

  it(`should return "loopyLighthouse" given "loopy lighthouse" `, () => {
    let result = camelCase("loopy lighthouse");
    result.should.equal("loopyLighthouse");
  });

  it(`should return "supercalifragalisticexpialidocious" given "supercalifragalisticexpialidocious" `, () => {
    let result = camelCase("supercalifragalisticexpialidocious");
    result.should.equal("supercalifragalisticexpialidocious");
  });

  it(`should return "" given "" `, () => {
    let result = camelCase("");
    result.should.equal("");
  });

  it(`should return "doSpacesWork" given " do spaces work " `, () => {
    let result = camelCase(" do spaces work ");
    result.should.equal("doSpacesWork");
  });

  it(`should return "allUpperCase" given "ALL UPPER CASE" `, () => {
    let result = camelCase("ALL UPPER CASE");
    result.should.equal("allUpperCase");
  });
  
  it(`should return "" given 5 `, () => {
    let result = camelCase(5);
    result.should.equal("");
  });

});