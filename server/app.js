var express = require('express')
  , gzippo = require('gzippo')
  , app = require('express').createServer()
  , io = require('socket.io').listen(app)
  , fs = require('fs')
  , Game = require('../public/ServerGame')
  , Player = require('../public/Player')
  , CurrentMovesRegistry = require('./currentMovesRegistry').CurrentMovesRegistry
  , game = new Game()
  , currentMovesRegistry = new CurrentMovesRegistry()
  , updated = false
  , Scoreboard = require('./Scoreboard')
  ;

console.log();

app.configure(function(){
  app.set('views', __dirname + '/../views');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(gzippo.staticGzip(__dirname + '/../public'));
  app.use(app.router);
});

io.sockets.on('connection', function (socket) {
  socket.emit('connected', { success: true, player: socket.id });
  // socket.on('control', function (data) {
		// // This will have the controls coming into the node instance, we will need
		// // to sort these by id's and ensure that they are not mutable by each other.
  // });

  socket.on('controllerConnected', function() {
    game.addPlayer(socket.id, new Player());
    process.nextTick(function() {
    setInterval(function() {
      var player = game.getPlayer(socket.id);
      Scoreboard.addNew(socket.id, player.positions.length);
      if (player.isDead) {
        socket.emit('dead');
      } else {
        socket.emit('update', { gameState: game.getGameState(), timestamp: +Date.now(), scoreboard: Scoreboard.getAll() });
      }
    }, 400);
  });
  });

  socket.on('controllerDisconnected', function() {
    game.removePlayer(socket.id);
  });

  socket.on('move', function(data /* { direction {n,e,s,w} } */) {
    // game.movePlayer(socket.id);
    currentMovesRegistry.store(socket.id, data);
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

process.nextTick(function() {
  // This will be the game loop.
  currentMovesRegistry.retrieveAll(function(data) {
    updated = false;
    Object.keys(data).forEach(function(player, sid) {
      game.processMove(player, sid);
    });
  });
});

console.log(io.sockets);


