function draw(grid) {
  for (x = 0; x < grid.length; ++x) {
    for (y = 0; y < grid[x].length; ++y) {
      switch (grid[x][y]) {
        case null:
          drawSquare(x, y, "rgb(80, 80, 80)");
          break;
        case 0:
          drawSquare(x, y, "rgb(0, 255, 0)");
          break;
        case 1:
          drawSquare(x, y, "rgb(255, 0, 0)");
          break;
      }
    }
  }
}

function drawSquare(x, y, color) {
  var canvas = document.getElementById("canvas");  
  var ctx = canvas.getContext("2d");  

  ctx.fillStyle = color;
  ctx.fillRect (x * 50, y * 50, 50, 50);
}