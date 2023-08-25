const Utils = require('./utils.js');
const sendPaymentRequestToApi = function sendPaymentRequestToApi(totalAmount, totalShipping) {
	const amount = Utils.calculateNumber('SUM', totalAmount, totalShipping)
	console.log(`The total is: ${amount}`);
}
module.exports = sendPaymentRequestToApi;

