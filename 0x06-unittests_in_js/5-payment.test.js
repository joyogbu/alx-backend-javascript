const expect = require('chai').expect
const sinon = require('sinon')
const Utils = require("./utils.js");
const sendPaymentRequestToApi = require('./3-payment.js');
describe('sendPaymentRequestToApi', function () {
	let calledFuncSpy;
	let calledConsole;
	beforeEach(function() {
		//calledFuncSpy = sinon.stub(Utils, 'calculateNumber').returns (10);

		calledConsole = sinon.spy(console, 'log')
	});
	/*afterEach(function() {
		calledFuncSpy.restore();
	});*/
	it('test the sum function', function() {
		sendPaymentRequestToApi(100, 20);
		expect(calledConsole.calledOnce).to.be.true;
		expect(calledConsole.calledWith('The total is: 120')).to.be.true;
	});
	/*afterEach('verify console', function () {
		calledConsole.restore()*/
	it('validate utils function', function() {
		expect(Utils.calculateNumber('SUM', 10, 10)).to.equal(20);
	});
	afterEach(function() {
		//calledFuncSpy.restore();
		calledConsole.restore();
        });
});
