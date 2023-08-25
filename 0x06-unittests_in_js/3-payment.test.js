const chai = require('chai').expect
const spy = require('sinon').spy
const sendPaymentRequestToApi = require('./3-payment.js');
describe('sendPaymentRequestToApi', function () {
	let calledFuncSpy;
	beforeEach(function() {
		calledFuncSpy = spy(sendPaymentRequestToApi, 'calledFunc');
	});
	afterEach(function() {
		calleddFuncSpy.restore();
	});
	it('test the sum function', function() {
		expect(sendPaymentRequestToApi(6, 1)).to.equal(7);
	});
});
	
	
