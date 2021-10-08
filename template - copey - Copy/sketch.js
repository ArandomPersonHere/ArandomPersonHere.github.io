//grid demo 2D Array
// 
let gridSize = 25;
let grid;

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2DArray(gridSize, gridSize);
}

function draw() {
  background("green");
  displayGrid();
  fill("black");
  rect (mouseX, mouseY, 100, 50);

}

function displayGrid(){
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;
  for (let y = 0; y<gridSize; y++){
    for (let x = 0; x<gridSize; x++){
      if (grid[y][x] === 0){
        fill("blue");
      }
      else if (grid[y][x] === 1){
        fill("red");
      }

      rect (x *cellWidth, y *cellHeight, cellWidth, cellHeight);
    }

  }

}


function createRandom2DArray(rows,cols){
  let grid = [];
  for (let y = 0; y<rows; y++){
    grid.push([]);
    for (let x = 0; x<cols; x++) {
      if (random(100) <50){
        grid[y].push(0);
      }
      else{
        grid[y].push(1);
      }
    }
    
  }
  return grid;
}
// function createEmpty2DArray(rows,cols){
//   let grid = [];
//   for (let y = 0; y<rows; y++){
//     grid.push([]);
//     for (let x = 0; x<cols; x++);
//     grid[y].push(0);
//   }
//   return grid;
// }

