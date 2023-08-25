const assert = require('assert')
const calculateNumber = require("./1-calcul.js");
describe('calculateNumber', function () {
	it("compare sumz", function() {
		//const calculateNumber = require("./0-calcul.js");
		assert.equal(calculateNumber('SUM', 1, 3), 4)
	});
	it("compare with float", function () {
		assert.equal(calculateNumber('SUM', 1, 3.7), 5)
	});
	it("compare another float", function () {
		assert.equal(calculateNumber('SUM', 1.2, 3.4), 4)
	});
	it("compare another float", function () {
                assert.equal(calculateNumber('SUM', 2.5, 3.2), 6)
        });
	it("compare negative float", function () {
                assert.equal(calculateNumber('SUM', 1.2, -3.0), -2)
        });
	it("compare negative integer", function (){ 
                assert.equal(calculateNumber('SUM', -3.6, 7), 3)
        });
	it("round down negative float", function () {
                assert.equal(calculateNumber('SUM', -3.5, 7), 4)
        });
	it("subtract positive integers", function () {
		assert.equal(calculateNumber('SUBTRACT', 4, 2), 2);
		assert.equal(calculateNumber('SUBTRACT', 0, 0), 0)
		assert.equal(calculateNumber('SUBTRACT', 5, 8), -3);
	});
	it("subtract negative integers", function () {
		assert.equal(calculateNumber('SUBTRACT', -3, 4), -7);
		assert.equal(calculateNumber('SUBTRACT', 4, -2), 6);
	});
	it("subtract positive floats", function () {
		assert.equal(calculateNumber('SUBTRACT', 4.6, 8.3), -3);
		assert.equal(calculateNumber('SUBTRACT', 2.2, 6), -4);
		assert.equal(calculateNumber('SUBTRACT', 3, 6.8), -4);
	});
	it("subtract negative floats", function () {
		assert.equal(calculateNumber('SUBTRACT', -4.6, -5.3), 0);
		assert.equal(calculateNumber('SUBTRACT', -3.8, 2), -6);
		assert.equal(calculateNumber('SUBTRACT', 3, -2.3), 5);
		assert.equal(calculateNumber('SUBTRACT', 0, -2.3), 2);
	});
	it("Divide positive numbers", function () {
		assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
		assert.equal(calculateNumber('DIVIDE', 2, 4), 0.5);
	});
	it("divide by zero", function () {
		assert.equal(calculateNumber('DIVIDE', 4, 0), 'Error');
		assert.equal(calculateNumber('DIVIDE', -858446, 0), 'Error');
		assert.equal(calculateNumber('DIVIDE', 4.55987, 0), 'Error');
		assert.equal(isNaN(calculateNumber('DIVIDE', 0, 0)), true);
	});
	it("divide floats", function () {
		assert.equal(calculateNumber('DIVIDE', 4.5, 3.2), 1.6666666666666667);
		assert.equal(calculateNumber('DIVIDE', 4.5, 2), 2.5);
		assert.equal(calculateNumber('DIVIDE', 4, 9), 0.4444444444444444);
		assert.equal(calculateNumber('DIVIDE', 3, 7.5), 0.375);
		assert.equal(isNaN(calculateNumber('DIVIDE', 0, 0.3)), true);
		assert.equal(calculateNumber('DIVIDE', 0, 0.6), 0);
	});
	it("divide floats and negative", function () {
		assert.equal(calculateNumber('DIVIDE', 4.5, -2), -2.5);
		assert.equal(calculateNumber('DIVIDE', -4.5, 2), -2);
		assert.equal(calculateNumber('DIVIDE', -6.5, -2.5), 3);
		assert.equal(calculateNumber('DIVIDE', -6, -2.5), 3);
	});
	it ("divide negative integers", function () {
		assert.equal(calculateNumber('DIVIDE', -6, 2), -3);
		assert.equal(calculateNumber('DIVIDE', -6, -3), 2);
		assert.equal(calculateNumber('DIVIDE', 4, -2), -2);
	});
});
