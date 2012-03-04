function Game(){ 
	this.players = [];
	this.food_location;
	this.status = false;
}

Game.prototype.run() {
	this.status = true;
	while (this.status) setTimeout(500, draw);
}

Game.prototype.draw() {

}

Game.prototype.drawPlayer(player) {
	
}

Game.prototype.drawPixel(coord, color) {
	var canvas = document.getElementById("canvas");  
	var ctx = canvas.getContext("2d");  

	ctx.fillStyle = color;
	ctx.fillRect (coord.x, coord.y, 50, 50);
}