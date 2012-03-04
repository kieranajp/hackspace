function Coord(x, y){
	this.x = x;
	this.y = y;
}

Coord.prototype.toString = function() {
	return this.x + "," + this.y;
};

Coord.prototype.isEqualTo = function(coord) {
	return (this.x === coord.x && this.y === coord.y);
};

Coord.prototype.move = function(direction) {
  var newCoord = this;
  switch(direction) {
    case 'n':
      --newCoord.y;
      break;
    case 'e':
      ++newCoord.x;
      break;
    case 's':
      ++newCoord.y;
      break;
    case 'w':
      --newCoord.x;
      break;
  }
  return newCoord;
};