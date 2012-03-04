var Scoreboard = function() {
  this.store = {};
};

Scoreboard.prototype.getAll = function() {
  return this.store;
};

Scoreboard.prototype.addNew = function(playerId, score) {
  if(this.store[playerId] < score) {
    this.store[playerId] = score;
  }
};

module.exports = Scoreboard;