// Task Name: LAB 3
// Garcia, Louis Jae F.
// WD 201 

var http = require('http');

var server = http.createServer(function (req, res){
  if (req.url == '/'){
    res.writeHead(200, {'Content-Type': 'text.html'});
    res.write('<html><h1>Welcome to my Node.js Application</h1><body><p>Welcome John Smith. This is an activity about basics of Node.js</p></body></html>');
    res.end();

  }
  else if (req.url == "/student"){
    res.writeHead(200, {'Content-Type': 'text.html'});
    res.write('<html><h1>Welcome to my Node.js Application</h1><body><p>Welcome John Smith. This is an activity about basics of Node.js</p></body></html>');
    res.end();
  }
  else if (req.url == "/admin") {
    res.writeHead(200, {'Content-Type': 'text.html'});
    res.write('<html><body><p>This is admin Page.</p></body></html>');
    res.end();
  }
  else 
    res.end('Invalid Request!');

});

server.listen(5000);

console.log('Node.js web server at port 5000 is running..')