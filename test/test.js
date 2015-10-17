var assert = require('chai').assert;
var expect = require('chai').expect;

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe('Random Test Tests', function() {
  it("'foo' should be a string using 'assert'", function() {
		var foo = "bar"
		assert.typeOf(foo, 'string');
  });

  it("'foo' should be a string using 'expect'", function() {
  	var foo = "bar"
  	expect(foo).to.be.a("string");
  })
});