const http = require('http');
const Chuck = require('chucknorris-io');

const port = 3000;

const server = http.createServer((req, res) => {
	  res.statusCode = 200;
	  res.setHeader('Content-Type', 'text/plain');
	  new Chuck().getRandomJoke().then((resp) => {
		  res.end(`${resp.getValue()}\n`)
	  })
});

server.listen(port, () => {
	  console.log(`Server listening on port ${port}`)
});
