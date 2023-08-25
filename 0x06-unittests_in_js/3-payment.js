const Utils = require('./utils.js');
const sendPaymentRequestToApi = function sendPaymentRequestToApi(totalAmount, totalShipping) {
	const amount = Utils.calculateNumber('SUM', totalAmount, totalShipping)
	return(`The total is: ${amount}`);
	sendPaymentRequestToApi.Utils()
}
sendPaymentRequestToApi.Utils = Utils
module.exports = sendPaymentRequestToApi;
//module.exports = Utils;

