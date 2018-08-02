//var express = require('express');
//var expphbs = require('express-handlebars');
var http = require('http');
http.createServer(
    function(req, res){
        //var path = req.url.toLowerCase();
        var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
        switch(path){
            case '':
                res.writeHead(200, {'Content-Type':'text-plain'});
                res.end('Page Home');
                break;
            case '/about':
                res.writeHead(200, {'Content-Type':'text-plain'});
                res.end('Page About');
                break;
            default:
                res.writeHead(200, {'Content-Type':'text-plain'});
                res.end('Error not found 404');
                break;
        }
    }

).listen(3000);
console.log ('Servidor en el puerto localhost:3000');