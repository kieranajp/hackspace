var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')
  ;

io.sockets.on('connection', function (socket) {
  socket.emit('connection', { success: true });
  socket.on('control', function (data) {
		// This will have the controls coming into the node instance, we will need
		// to sort these by id's and ensure that they are not mutable by each other.
  });
});

app.listen(8080);

function handler (req, res) {
  fs.readFile(__dirname + '../public/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

