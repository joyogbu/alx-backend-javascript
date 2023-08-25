const assert = require('assert');
const expect = require('chai').expect;
const calculateNumber = require("./2-calcul_chai.js");
describe('calculateNumber', function () {
	it("compare sumz", function() {
		//const calculateNumber = require("./0-calcul.js");
		expect(calculateNumber('SUM', 1, 3)).to.equal(4)
	});
	it("compare with float", function () {
		expect(calculateNumber('SUM', 1, 3.7)).to.equal(5)
	});
	it("compare another float", function () {
		expect(calculateNumber('SUM', 1.2, 3.4)).to.equal(4)
	});
	it("compare another float", function () {
                expect(calculateNumber('SUM', 2.5, 3.2)).to.equal(6)
        });
	it("compare negative float", function () {
                expect(calculateNumber('SUM', 1.2, -3.0)).to.equal(-2)
        });
	it("compare negative integer", function (){ 
                expect(calculateNumber('SUM', -3.6, 7)).to.equal(3)
        });
	it("round down negative float", function () {
                expect(calculateNumber('SUM', -3.5, 7)).to.equal(4)
        });
	it("subtract positive integers", function () {
		expect(calculateNumber('SUBTRACT', 4, 2)).to.equal(2);
		assert.equal(calculateNumber('SUBTRACT', 0, 0), 0)
		expect(calculateNumber('SUBTRACT', 5, 8)).to.equal(-3);
	});
	it("subtract negative integers", function () {
		expect(calculateNumber('SUBTRACT', -3, 4)).to.equal(-7);
		expect(calculateNumber('SUBTRACT', 4, -2)).to.equal(6);
	});
	it("subtract positive floats", function () {
		expect(calculateNumber('SUBTRACT', 4.6, 8.3)).to.equal(-3);
		expect(calculateNumber('SUBTRACT', 2.2, 6)).to.equal(-4);
		expect(calculateNumber('SUBTRACT', 3, 6.8)).to.equal(-4);
	});
	it("subtract negative floats", function () {
		expect(calculateNumber('SUBTRACT', -4.6, -5.3)).to.equal(0);
		expect(calculateNumber('SUBTRACT', -3.8, 2)).to.equal(-6);
		expect(calculateNumber('SUBTRACT', 3, -2.3)).to.equal(5);
		expect(calculateNumber('SUBTRACT', 0, -2.3)).to.equal(2);
	});
	it("Divide positive numbers", function () {
		expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
		expect(calculateNumber('DIVIDE', 2, 4)).to.equal(0.5);
	});
	it("divide by zero", function () {
		expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
		expect(calculateNumber('DIVIDE', -858446, 0)).to.equal('Error');
		expect(calculateNumber('DIVIDE', 4.55987, 0)).to.equal('Error');
		expect(isNaN(calculateNumber('DIVIDE', 0, 0))).to.equal(true);
	});
	it("divide floats", function () {
		expect(calculateNumber('DIVIDE', 4.5, 3.2)).to.equal(1.6666666666666667);
		expect(calculateNumber('DIVIDE', 4.5, 2)).to.equal(2.5);
		expect(calculateNumber('DIVIDE', 4, 9)).to.equal(0.4444444444444444);
		expect(calculateNumber('DIVIDE', 3, 7.5)).to.equal(0.375);
		expect(isNaN(calculateNumber('DIVIDE', 0, 0.3))).to.equal(true);
		expect(calculateNumber('DIVIDE', 0, 0.6)).to.equal(0);
	});
	it("divide floats and negative", function () {
		expect(calculateNumber('DIVIDE', 4.5, -2)).to.equal(-2.5);
		expect(calculateNumber('DIVIDE', -4.5, 2)).to.equal(-2);
		expect(calculateNumber('DIVIDE', -6.5, -2.5)).to.equal(3);
		expect(calculateNumber('DIVIDE', -6, -2.5)).to.equal(3);
	});
	it ("divide negative integers", function () {
		expect(calculateNumber('DIVIDE', -6, 2)).to.equal(-3);
		expect(calculateNumber('DIVIDE', -6, -3)).to.equal(2);
		expect(calculateNumber('DIVIDE', 4, -2)).to.equal(-2);
	});
});
