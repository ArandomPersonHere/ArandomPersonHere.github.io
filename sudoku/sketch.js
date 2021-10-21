
// sudoku demo

let intitialGrid = [
  [ 4, 7, 0, 9, 0, 1, 6, 0, 5],
  [ 0, 2, 0, 3, 0, 0, 0, 8, 4],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0,1,4,7,0,8,0,5,0],
  [6,0,0,2,0,3,0,0,9],
  [0,3,0,6,0,5,8,1,0],
  [8,0,0,0,0,0,0,0,0],
  [5,9,0,0,0,4,0,2,0],
  [7,0,1,5,0,2,0,9,8],

];

let gridDimensions = 9;
let cellSize;
let grid;

function setup() {
  if (windowWidth< windowHeight){
    createCanvas(windowWidth*0.8, windowWidth*0.8);
  }
  else{
    createCanvas(windowHeight*0.8, windowHeight*0.8);
  }

  cellSize = (width -2 )/gridDimensions;
  grid = intitialGrid;
}

function draw() {
  background("purple");
  displayGrid();
}

function displayGrid(){

  for (let i = 0; i< gridDimensions; i ++){
    for (let b = 0; b<gridDimensions; b++){
      fill("white");
      strokeWeight(1);
      rect(b*cellSize, i*cellSize, cellSize, cellSize);

      if (grid[i][b] !== 0 ){

        //show the number
        fill('black');
        textSize(cellSize*0.75);
        textAlign(CENTER, CENTER);
        text(grid[i][b], b*cellSize + cellSize/2, i*cellSize + cellSize/2);
      }
    }
    drawCageLines();
  }
  
}

function drawCageLines(){
 

  for (let location = 0; location <= 9; location +=3){
    stroke(10);
    line(0, cellSize*location, width, cellSize*location);

    line(cellSize*location, 0, cellSize*location, height);

    
  }


}

