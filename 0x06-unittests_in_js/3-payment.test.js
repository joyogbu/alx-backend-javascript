const expect = require('chai').expect
const sinon = require('sinon')
const Utils = require("./utils.js");
const sendPaymentRequestToApi = require('./3-payment.js');
describe('sendPaymentRequestToApi', function () {
	let calledFuncSpy;
	let calledConsole;
	beforeEach(function() {
		calledFuncSpy = sinon.spy(Utils);
		calledConsole = sinon.spy(console, 'log')
	});
	/*afterEach(function() {
		calledFuncSpy.restore();
	});*/
	it('test the sum function', function() {
		expect(sendPaymentRequestToApi(100, 20)).to.equal(console.log('The total is: 120'));
		//expect(calledConsole.calledOnce).to.be.true;
		//expect(calledConsole.calledWith('The total is: 120')).to.be.true;
	});
	afterEach(function() {
		calledFuncSpy.calculateNumber.restore();
		calledConsole.restore();
        });
});
	
	
