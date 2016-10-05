var http = require("http");
var url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        var urlParsed = url.parse(request.url, true);
        console.log("Request received.");

        route(handle, urlParsed.pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Привет, " + urlParsed.query.name + '!');
        response.end();
    }

    http.createServer(onRequest).listen(2999);
}

exports.start = start;

