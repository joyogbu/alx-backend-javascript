const assert = require('assert')
const calculateNumber = require("./0-calcul.js");
describe('calculateNumber', function () {
	it("compare sumz", function() {
		//const calculateNumber = require("./0-calcul.js");
		assert.equal(calculateNumber(1, 3), 4)
	});
	it("compare with float", function () {
		assert.equal(calculateNumber(1, 3.7), 5)
	});
	it("compare another float", function () {
		assert.equal(calculateNumber(1.2, 3.4), 4)
	});
	it("compare another float", function () {
                assert.equal(calculateNumber(2.5, 3.2), 6)
        });
	it("compare negative float", function () {
                assert.equal(calculateNumber(1.2, -3.0), -2)
        });
	it("compare negative integer", function (){ 
                assert.equal(calculateNumber(-3.6, 7), 3)
        });
	it("round down negative float", function () {
                assert.equal(calculateNumber(-3.5, 7), 4)
        });
});
