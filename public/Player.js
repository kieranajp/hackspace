var util = require('util')
  , EventEmitter = require('events').EventEmitter
  ;

var Player = function() {
  this.connection = null;
  this.timeout = 10 * 60 * 60 * 1000;
  this.position = [];
};

util.inherits(Player, EventEmitter);

Player.prototype.updatePosition = function(first_argument) {
  // body...
};

Player.prototype.changeDirection = function(first_argument) {
  // body...
};