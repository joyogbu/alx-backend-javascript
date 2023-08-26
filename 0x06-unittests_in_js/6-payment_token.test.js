const getPaymentTokenFromAPI = require('./6-payment_token.js');
const assert = require('assert');
const expect = require('chai').expect;
describe('getPaymentTokenFromAPI', function () {
	it('test the response', function (done) {
		getPaymentTokenFromAPI(true).then(({data}) => {
		assert.equal(data, 'Successful response from the API');
		done();
		}).catch(done)
	});
});
