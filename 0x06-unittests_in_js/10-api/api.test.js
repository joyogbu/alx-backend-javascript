const expect = require('chai').expect
const assert = require('assert')
const chai = require('chai')
const request = require('request')
const server = require('./api')
describe('Index Page', function () {
	it('Correct status code for GET /', function (done) {
		request.get('http://localhost:7865/', function (err, response, body) {
			assert.equal(response.statusCode, 200)
			done();
		});
	});
	it('Correct status code for GET /cart/id', function (done) {
		request.get('http://localhost:7865/cart/12', function (err, response, body) {
			assert.equal(response.statusCode, 200)
			//assert.equal(response.body, 'Welcome to the payment system')
			done();
		});
	});
	it('correct status code when id is not a number', function(done) {
		request.get('http://localhost:7865/cart/hello', function (err, response, body) {
			assert.equal(response.statusCode, 404)
			done()
		});
	});

	it('Correct result for GET /cart/id', function (done) {
		request.get('http://localhost:7865/cart/12', function (err, response, body) {
			assert.equal(response.body, 'Payment methods for cart 12')
		done()
		});
		//done()
	});
	it('Correct result for GET /', function (done) {
		request.get('http://localhost:7865/', function (err, response, body) {
			assert.equal(response.body, 'Welcome to the payment system')
		done()
		});
	})
	it('correct result for POST /login', function (done) {
		const options = {
			method: 'POST',
			url: 'http://localhost:7865/login',
			json: {
				userName: 'Betty'
			}
		};
		request(options, function (err, response, body) {
			assert.equal(response.body, 'Welcome Betty');
			assert.equal(response.statusCode, 200);
			done();
		});
	});
	it('GET /available payments', function(done) {
		request.get('http://localhost:7865/available_payments', function(err, response, body) {
			assert.equal(response.body, '{"payment_methods":{"credit_cards":true,"paypal":false}}');
			done();
		});
	});
});
