//grid demo 2D Array
// 
let gridSize = 50;
let grid;
let mysound;

// function preload(){
//   mysound = loadSound("sound_file/Socapex-Evol Online all.wav");

// }

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  grid = createEmpty2DArray(gridSize, gridSize);
}

function draw() {
  background("green");
  displayGrid();
 

}

function keyPressed(){
  if (key === "e"){
    grid = createEmpty2DArray(gridSize, gridSize);
  }
  if (key === "b"){
    grid = createEmpty2DArray(gridSize, gridSize, 1);
  }
  if (key === "r"){
    grid = createRandom2DArray(gridSize, gridSize);
  }

}

function mousePressed() {
 // mysound.play();

  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;

  let cellX = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);



//center
  swap(cellX, cellY);
  //right
  swap(cellX +1 , cellY);
  //left
  swap(cellX -1 , cellY);
  //up
  swap(cellX, cellY+1);
  //down
  swap(cellX, cellY -1);

  

}
function swap(x, y){

  if (x >= 0&& x< gridSize && y>=0 && y <gridSize){
    if (grid[x][y] === 0){
      grid [x][y] = 1;
    }
    else if (grid[y][x] === 1){
      grid [y][x] = 0;

    }
  }
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

function createRandom2DArray(rows,cols, numToFill = 0){
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


function createEmpty2DArray(rows,cols, numToFill = 0){
  let grid = [];
  for (let y = 0; y<rows; y++){
    grid.push([]);
    for (let x = 0; x<cols; x++){
    grid[y].push(numToFill);
    }
  }
  return grid;
}

