function Coord(x, y){
	this.x = x;
	this.y = y;
}

Coord.setX = function(x) {
  this.x = x;
};

Coord.setY = function(y) {
  this.y = y;
};

Coord.prototype.toString = function() {
	return this.x + "," + this.y;
};

Coord.prototype.isEqualTo = function(coord) {
	return (this.x === coord.x && this.y === coord.y);
};

Coord.prototype.move = function(direction) {
  var newCoord;
  switch(direction) {
    case 'n':
      newCoord = new Coord(this.x, this.y - 1);
      console.log(newCoord);
      break;
    case 'e':
      newCoord = new Coord(this.x + 1, this.y);
      console.log(newCoord);
      break;
    case 's':
      newCoord = new Coord(this.x, this.y + 1);
      console.log(newCoord);
      break;
    case 'w':
      newCoord = new Coord(this.x - 1, this.y);
      console.log(newCoord);
      break;
  }
  return newCoord;
};

module.exports = Coord;