//grid project 
// what i want it to do 
// 1 - drag and play different audio filesinto different parts of the grid
// 2 - simultainiously play audio files in a collum
// 3 - have an auto play feature that visually dispays what collum it's playing
// 4 - 


// 
let gridSize = 20;
let grid;
//let mysound =[];
let whiteOrb, yellowOrb,greenOrb, blueOrb; 
let monoSynth;
let gridState = [];

//attempt at non-premade sounds
let velocity;
let time = 0;
let dur = 1/6;
let note;

function preload(){
   
  //premade sounds
  // mysound[1] = loadSound("assets/life.wav");
  // mysound[2] = loadSound("assets/hjm-tesla_sound_shot.wav");
  // mysound[3] = loadSound("assets/loseSound.wav");
  // mysound[4] = loadSound("assets/pcp.ogg");

  //images and icons
  whiteOrb = loadImage("assets/Lightless.png");
  yellowOrb = loadImage("assets/Flameless.png");
  blueOrb = loadImage("assets/BlueOrb.png");
  greenOrb = loadImage("assets/GreenOrb.png");


}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  grid = createEmpty2DArray(gridSize, gridSize);
 

  monoSynth = new p5.MonoSynth();
  // a simple C scale with C4 = 0
  note = ["C4", "D4", "E4", "A4", "B4","Fb4", "G4", "C5"];
  velocity = random();
}

function draw() {
  //background("green");
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
  if (key === "P"){
    linePlayer();
  }

  
}

function linePlayer(){
  // reads the first line of of the grid and plays the notes
  // without changing the tiles

  for (let i = 0; i <gridSize; i++){
    for (let b = 0; b <gridSize;b++){

      playSynth(grid[i][b]);
      console.log(grid[i][b]);
    }
  }



}

function playSynth(colorToNote) {
  userStartAudio();

  // note velocity (volume, from 0 to 1)
  velocity = random();
  // time from now (in seconds)
  time = 0.1;
  // note duration (in seconds)
  dur = 1/6;

  monoSynth.play(note[colorToNote], velocity, time, dur);
}

function mousePressed() {
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;
  let cellX = Math.floor(mouseX/ cellWidth);
  let cellY = Math.floor(mouseY/ cellHeight);

  

  if (grid[cellY][cellX] === 0) {
    grid[cellY][cellX] = 1;
    // mysound[3].play();
   
    playSynth(0);
  }
  else if (grid[cellY][cellX] === 1) {
    grid[cellY][cellX] = 2;
    playSynth(1);
  }
  else if (grid[cellY][cellX] === 2) {
    grid[cellY][cellX] = 3;
    playSynth(2);
  }
  else if (grid[cellY][cellX] === 3) {
    grid[cellY][cellX] = 0;
    playSynth(6);
  }
  
}



function displayGrid(){
  
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;
  for (let y = 0; y<gridSize; y++){
    for (let x = 0; x<gridSize; x++){

      //make grid icons

      if (grid[y][x] === 0){
        image(whiteOrb,x *cellWidth, y *cellHeight, cellWidth, cellHeight); 
      }
      else if (grid[y][x] === 1){
        image(yellowOrb,x *cellWidth, y *cellHeight, cellWidth, cellHeight); 
      }
      else if (grid[y][x] === 2){
        image(greenOrb,x *cellWidth, y *cellHeight, cellWidth, cellHeight); 
      }
      else if (grid[y][x] === 3){
        image(blueOrb,x *cellWidth, y *cellHeight, cellWidth, cellHeight); 
      }
     
    }

  }
 
}

function createRandom2DArray(rows,cols, numToFill = 0){
  let grid = [];
  for (let y = 0; y<rows; y++){
    grid.push([]);
    for (let x = 0; x<cols; x++) {
      if (random(100) <25){
        grid[y].push(0);
      }
      else if (random(100) <50){
        grid[y].push(1);
      }
      else if (random(100) <75){
        grid[y].push(2);
      }
      else{
        grid[y].push(3);
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