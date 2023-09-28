// Make Basic Server Output on Browser
const http = require('http');
const { default: test } = require('node:test');

// http.createServer((req,res)=>{
// res.write('<h1>hello world</h1>');
// res.end();
// }).listen(4500);


const dataController =(req,res)=>{
    res.write('<h1>hello world This is test Function</h1>');
    res.end();
}

http.createServer(dataController).listen(4500);