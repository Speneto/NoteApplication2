var sum = require('../sum');
var expect = require('chai').expect;
describe(" The sum function",function()){
  it("should not accept strings",function()){
    expect(sum("one","two")).to.equal('Strings are not valid Input');
  });


it("should retunot accept strings".function()){
    expect(sum(1,2)).to.equal(3);
  });

});
