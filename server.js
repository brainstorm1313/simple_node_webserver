var http = require("http");
var url = require('url');

function start() {
    function onRequest(request, response) {
        console.log("Request received.");
        response.writeHead(200, {"Content-Type": "text/plain"});
        var urlParsed = url.parse(request.url, true);
        response.write("Привет, " + urlParsed.query.name + '!');
        response.end();
    }

    http.createServer(onRequest).listen(2999);
}

exports.start = start;

