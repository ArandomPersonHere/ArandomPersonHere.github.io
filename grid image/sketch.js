//grid images demo
// 
let gridSize = 30;
let grid;
let grassIMG;
let stoneIMG;
let woodIMG;


function preload(){
  grassIMG = loadImage("assets/grass2.png");
  stoneIMG = loadImage("assets/paving.png");


}


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

  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;

  let cellX = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);

}



function displayGrid(){
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;
  for (let y = 0; y<gridSize; y++){
    for (let x = 0; x<gridSize; x++){
      if (grid[y][x] === 0){
        image(grassIMG,x *cellWidth, y *cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 1){
        image(stoneIMG,x *cellWidth, y *cellHeight, cellWidth, cellHeight);
      }      
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

