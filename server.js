var http = require('http');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

var serve = serveStatic("./");

var server = http.createServer(function (req, res) {
    var done = finalhandler(req, res);
    serve(req, res, done);
});

server.listen(8000, "192.168.1.102");

console.log("running");

// To run:
// $ npm install finalhandler serve-static
// $ node myapp.js
