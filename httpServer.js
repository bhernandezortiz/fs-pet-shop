'use strict';

const http = require('http')
const port = process.env.PORT || 8000
const fs = require('fs')


var server = http.createServer(function(req, res) {
    if (req.method === 'GET' && req.url === '/pets') {
      fs.readFile('./pets.json', 'utf8', function(err, data) {
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
      });
    }else if(req.method === 'GET' && req.url === '/pets0'){
      fs.readFile('./pets.json', 'utf8', function(err, data) {
        var parsedData = JSON.parse(data)
        var firstAnimal = parsedData[0]
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(firstAnimal));
      });
    }else if(req.method === 'GET' && req.url === '/pets1'){
      fs.readFile('./pets.json', 'utf8', function(err, data) {
        var parsedData = JSON.parse(data)
        var secondAnimal = parsedData[1]
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(secondAnimal));
      })
    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not found');
      }
});

server.listen(port, function() {
    console.log('Listening on port', port);
  });