//var express = require('express');
//var expphbs = require('express-handlebars');
var http = require('http');
http.createServer(
    function(req, res){
        res.writeHead(200, {'Content-Type':'text-plain'});
        res.end('Hello world');
        
    }

).listen(3000);
console.log ('Servidor en el puerto localhost:3000');