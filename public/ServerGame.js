var GameState = require('./GameState').GameState;

var Game = function() {
  this.players = {};
  this.gameState = new GameState();
};

Game.prototype.addPlayer = function(sid, player) {
  this.players[sid] = player;
};

Game.prototype.removePlayer = function(sid) {
  delete this.players[sid];
};

// process the moves on the next tick of the sever.
Game.prototype.processMove = function(player, sid) {
  var oldPos = player.positions[0];
  this.gameState.move(player.positions[0], player.positions[0].move(player.direction));

  for (var i = 1; i < player.positions.length; i++) {
    this.gameState.move(player.positions[i], oldPos);
    oldPos = player.positions[i];
  }
};

module.exports = Game;