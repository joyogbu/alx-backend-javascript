const expect = require('chai').expect
const spy = require('sinon').spy
const Utils = require("./utils.js");
const sendPaymentRequestToApi = require('./3-payment.js');
describe('sendPaymentRequestToApi', function () {
	let calledFuncSpy;
	beforeEach(function() {
		calledFuncSpy = spy();
	});
	afterEach(function() {
		calledFuncSpy.restore();
	});
	it('test the sum function', function() {
		expect(sendPaymentRequestToApi(6, 1)).to.equal('The total is: 7');
	});
});
	
	
