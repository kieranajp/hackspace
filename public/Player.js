var util = require('util')
  , EventEmitter = require('events').EventEmitter
  , Coord = require('./Coord')
  ;

var Player = function() {
  this.connection = null;
  this.timeout = 10 * 60 * 60 * 1000;
  this.positions = [new Coord(4,4)];
  this.direction = '';
  this.dead = false;
};

util.inherits(Player, EventEmitter);

// Player.prototype.updatePosition = function(first_argument) {
//   // body...
// };

Player.prototype.changeDirection = function(direction) {
  this.direction = direction;
};

Player.prototype.eat = function(first_argument) {
  // find a way to add a tail onto it.
};

module.exports = Player;