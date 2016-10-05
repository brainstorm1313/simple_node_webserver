var http = require("http");

function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Привет!");
    response.end();
}

http.createServer(onRequest).listen(2999);