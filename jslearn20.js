var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

var foo = 'bar';
var beverages = {tea: ['chai','matcha', 'oolong']};

// assert styles
assert.typeOf(foo, 'string', 'foo is a string');
assert.equal(foo, 'bar', 'foo equal "bar"');
assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');

// expect styles
expect(foo).to.equal('bar');
expect(foo).to.to.be.a('string');
expect(foo).to.have.length(3);
expect(beverages.tea).to.have.length(3);
expect(beverages).to.have.property('tea').with.length(3);

// should styles
foo.should.equal('bar');
foo.should.be.a('string');
foo.should.have.length(3);
beverages.should.have.property('tea').with.length(3);