//grid project 
// what i want it to do 
// 1 - drag and play different audio filesinto different parts of the grid
// 2 - simultainiously play audio files in a collum
// 3 - have an auto play feature that visually dispays what collum it's playing
// 4 - 
// 
let gridSize = 20;
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
  //background("green");
  displayGrid();
 

}

function 


 keyPressed(){
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
  mysound.play();
}



function displayGrid(){
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;
  for (let y = 0; y<gridSize; y++){
    for (let x = 0; x<gridSize; x++){
      if (grid[y][x] === 0){
        fill("yellow");
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


function createEmpty2DArray(rows,cols,numToFill= 0){
  let grid = [];
  for (let y = 0; y<rows; y++){
    grid.push([]);
    for (let x = 0; x<cols; x++){
      grid[y].push(numToFill);
    }
  }
  return grid;
}

