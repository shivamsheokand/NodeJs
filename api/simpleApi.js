const http= require('http');
const Data= require('./simpleApiData');
http.createServer((req, res) => {
res.writeHead(200,'content-type', 'application/json');
res.write(JSON.stringify(Data));
res.end();
}).listen(4500);