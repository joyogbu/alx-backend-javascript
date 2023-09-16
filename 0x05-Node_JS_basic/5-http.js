const http = require('http');
const countStudents = require('./2-read_file');
const host = 'localhost';
const port = 1245;
const app = http.createServer((req, res) => {
	const arg = process.argv[2]
  switch(req.url) {
    case "/":
      res.end('Hello Holberton School!');
      break;
    case "/students":
      res.end("This is the list of our students")
		  countStudents(arg);
      break
  }
});
app.listen(port, host, () => {
  console.log('server running');
});
module.exports = app;
