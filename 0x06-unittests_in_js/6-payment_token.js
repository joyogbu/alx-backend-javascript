#!/usr/bin/node
const getPaymentTokenFromAPI = function (success) {
	//obj = {data: 'Successful response from the API'}
	if (success == true) {
		obj = {data: 'Successful response from the API'}
		//console.log(obj.data)
		return Promise.resolve(obj).then((value) => value.data);
	}
	else { return Promise.done() }
};
//getPaymentTokenFromAPI(true).then((value) => { console.log(value);})
module.exports = getPaymentTokenFromAPI;
