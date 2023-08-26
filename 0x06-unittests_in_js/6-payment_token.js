#!/usr/bin/node
const getPaymentTokenFromAPI = function (success) {
	if (success == true) {
		obj = {data: 'Successful response from the API'}
		return Promise.resolve(obj);
		//p.then((va) => {console.log(va)})
		//return p
	
	}

};
//getPaymentTokenFromAPI(true).then((value) => { console.log(value);})
module.exports = getPaymentTokenFromAPI;
