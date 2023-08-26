const expect = require('chai').expect
const assert = require('assert')
const chai = require('chai')
const request = require('request')
const server = require('./api')
describe('Index Page', function () {
	it('Correct status code?', function (done) {
		request.get('http://localhost:7865/', function (err, response, body) {
			assert.equal(response.statusCode, 200)
			done();
		});
	});
	it('Correct result?', function (done) {
		request.get('http://localhost:7865/', function (err, response, body) {
			assert.equal(response.body, 'Welcome to the payment system')
		done()
		});
		//done()
	});
	//request.close()
});
