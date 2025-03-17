// Create web server using node.js
// 1. Create a server using the http module
// 2. Create a server that listens on port 8080
// 3. Create a request handler that responds to all requests with the same response
// 4. Create a request handler that responds to /comments with an array of comments
// 5. Create a request handler that responds to /comments/new with the comment that was posted
// 6. Create a request handler that responds to /comments/new with the comment that was posted
// 7. Create a request handler that responds to /comments/new with the comment that was posted

// 1. Create a server using the http module
var http = require('http');

// 2. Create a server that listens on port 8080
var server = http.createServer(function(request, response) {
    // 3. Create a request handler that responds to all requests with the same response
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
});

// 4. Create a request handler that responds to /comments with an array of comments
var comments = ['First comment', 'Second comment', 'Third comment'];
var server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(comments));
});

// 5. Create a request handler that responds to /comments/new with the comment that was posted
var comments = ['First comment', 'Second comment', 'Third comment'];
var server = http.createServer(function(request, response) {
    if (request.url === '/comments/new' && request.method === 'POST') {
        var body = '';
        request.on('data', function(chunk) {
            body += chunk.toString();
        });
        request.on('end', function() {
            comments.push(body);
            response.writeHead(201, {'Content-Type': 'application/json'});
            response.end(body);
        });
    } else {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(comments));
    }
});

// 6. Create a request handler that responds to /comments/new with the comment that was posted
var comments = ['First comment', 'Second comment', 'Third comment'];
var server = http.createServer(function(request, response) {
    if (request.url === '/comments/new' && request.method ===