var express = require('express'),
    server  = express();

server.get('/', function(req, res){
  res.sendFile('html/index.html', { root: __dirname });
});

server.use(express.static(__dirname+"/css"));

server.get('/about', function(req, res){
  res.sendFile('html/about.html', { root: __dirname });
});

server.get('/contact', function(req, res){
  res.sendFile('html/contact.html', { root: __dirname });
});

server.listen(8080, function(){
  console.log('Now listening on port 8080');
});
