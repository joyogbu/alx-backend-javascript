const http = require('http');
const host = 'localhost'
const port = 1245
const app = http.createServer((req, res) => {
	res.end("Hello Holberton School!")});
app.listen(port, host, () => {
	console.log('server running')
});
module.exports = app
