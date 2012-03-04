var express = require('express')
  , gzippo = require('gzippo')
  , app = require('express').createServer()
  , io = require('socket.io').listen(app)
  , fs = require('fs')
  ;

app.configure(function(){
  app.set('views', __dirname + '/../views');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(gzippo.staticGzip(__dirname + '/../public'));
  app.use(app.router);
});

io.sockets.on('connection', function (socket) {
  socket.emit('connection', { success: true });
  socket.on('control', function (data) {
		// This will have the controls coming into the node instance, we will need
		// to sort these by id's and ensure that they are not mutable by each other.
  });

  socket.on('controllerConnected', function() {

  });

  socket.on('controllerDisconnected', function() {

  });

  socket.on('move', function(data /* { direction {n,e,s,w} } */) {
    
  });
});

app.listen(8080);

app.get('/', function (req, res) {
  fs.readFile(__dirname + '/../public/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
});

var game = new Game();

process.nextTick(function() {
  // This will be the game loop.
});



