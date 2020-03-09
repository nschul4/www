var http = require('http');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

var serve = serveStatic("./");

var server = http.createServer(function (req, res) {
    var done = finalhandler(req, res);
    serve(req, res, done);
});

var port = 8000;

server.listen(port, "0.0.0.0");

console.log("running");

// To run:
// $ npm install finalhandler serve-static
// $ node http_server.js
console.log("http://localhost:" + port + "/");
