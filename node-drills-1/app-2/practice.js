const http = require('http');

const server = http.createServer((req, res) => {
    res.end('My birthday is tomorrow!');
});

server.listen(3001, () => {
console.log('Server is running');
});
// Save the result of the createServer() method in a variable named server.

// Call the server's listen() method with the port number 3001.