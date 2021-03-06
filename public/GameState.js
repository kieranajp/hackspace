var GameState = function() {
  this.grid = [
      new Array(8)
    , new Array(8)
    , new Array(8)
    , new Array(8)
    , new Array(8)
    , new Array(8)
    , new Array(8)
    , new Array(8)
  ];
};

GameState.prototype.coordToGrid = function(Coord) {
  return this.grid[Coord.y][Coord.x];
};

GameState.prototype.updateCoordToGrid = function(fromCoord, toCoord) {
  this.grid[toCoord.y][toCoord.x] = 0;
  this.grid[fromCoord.y][fromCoord.x] = undefined;
};

GameState.prototype.addNewCoord = function(Coord) {
  this.grid[Coord.y][Coord.x] = 0;
};

GameState.prototype.removeCoord = function(Coord) {
  this.grid[Coord.y][Coord.x] = undefined;
};

GameState.prototype.checkCoord = function(Coord) {
  // body...
  // switch() {
  //   case undefined:
  //     // clear to move
  //     break;
  //   case 0:
  //     // player
  //     break;
  //   case 1:
  //     // food
  //     break;
  // }
  if (Coord === undefined) {
    return undefined;
  }
  if (this.inBounds(Coord)) {
    return this.coordToGrid(Coord);
  }

  return 0;
};

GameState.prototype.inBounds = function(coord) {
  if (coord.x < 0 || coord.x > this.grid[0].length || coord.y < 0 || coord.y > this.grid.length) {
    return false;
  }
  return true;
};

GameState.prototype.move = function(fromCoord, toCoord) {
  // body...s
  // check toCoordForObstructions.
  console.log(fromCoord + "    " + toCoord);
  var coordStatus = this.checkCoord(toCoord);


  if (coordStatus === 0) { // found person crashed and died
    return false;
  }

  this.updateCoordToGrid(fromCoord, toCoord);


  if (coordStatus === 1) {
    return 1;
  }

  return 0;

  // return 1; // food founf and number to add
  // return 0; // no food
  // return false; // dead
};

exports.GameState = GameState;