const express = require('express');
const app = express();
const port = 7865;
app.use(express.json())
app.get('/', (req, res) => res.send('Welcome to the payment system'));
app.get('/cart/:id([0-9]+)', (req, res) => {
	if (!req.params.id) {
		return res.status(404);
	}
	res.send(`Payment methods for cart ${req.params.id}`);
});
app.get('/available_payments', (req, res) => {
	data = {
	  payment_methods: {
	    credit_cards: true,
	    paypal: false
	  }
	}
	res.json(data);
});
app.post('/login', (req, res) => {
	res.send(`Welcome ${req.body.userName}`);
});
if (require.main === module) {
	app.listen(port, () => {
		console.log(`API available on localhost port ${port}`);
	});
}
module.exports = app
