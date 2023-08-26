const getPaymentTokenFromAPI = function (success) {
	if (success == true) {
		Promise.resolve('{data: "Successful response from the API"}').then((value) => { console.log(value);
	});
	}else {
		return
	}
};
module.exports = getPaymentTokenFromAPI;
