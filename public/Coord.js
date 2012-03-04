function Coord(x, y){ 
	this.x = x;
	this.y = y;
}
Coord.prototype.toString=function(){ 
	return this.x + "," + this.y;
}
Coord.prototype.isEqualTo(coord) {
	return (this.x == coord.x && this.y == coord.y);
}