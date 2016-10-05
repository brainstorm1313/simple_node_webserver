var http = require("http");
var url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        var urlParsed = url.parse(request.url, true);
        console.log("Request for " + urlParsed.pathname + " received.");

        route(handle, urlParsed.pathname, response);
    }

    http.createServer(onRequest).listen(2999);
}

exports.start = start;

