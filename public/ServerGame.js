var GameState = require('./GameState').GameState;

var Game = function() {
  this.players = {};
  this.gameState = new GameState();
};

Game.prototype.addPlayer = function(sid, player) {
  var that = this;
  that.players[sid] = player;
  for (var i = 0; i < player.positions.length; i++) {
    that.gameState.addNewCoord(player.positions[i]);
  }
};

Game.prototype.getPlayer = function(sid) {
  return this.players[sid];
};

Game.prototype.getGameState = function(sid) {
  return this.gameState;
};

Game.prototype.removePlayer = function(sid) {
  var that = this;
  var player = this.getPlayer(sid);
  for (var i = 0; i < player.positions.length; i++) {
    that.gameState.addNewCoord(player.positions[i]);
  }
  delete that.players[sid];
};

// process the moves on the next tick of the sever.
Game.prototype.processMove = function(direction, sid) {
  var player = this.getPlayer(sid);
  console.log(player + "     " + sid);
  if (player !== undefined) {
    var oldPos = player.positions[0];
    var movedCoord = player.positions[0].move(direction);
    var status = this.gameState.move(player.positions[0], movedCoord);
    if (status === 0) {
      player.dead = true;
      return false;
    } else {
      player.positions[0] = movedCoord;
    }

    for (var i = 1; i < player.positions.length; i++) {
      this.gameState.move(player.positions[i], oldPos);
      player.positions[i] = oldPos;
      oldPos = player.positions[i];
    }

    if (status === 1) {
      player.positions.push(oldPos);
    }
    return true;
  }
  return false;
};

module.exports = Game;