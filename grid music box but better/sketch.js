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
let whiteOrb, yellowOrb; 
let monoSynth;

//attempt at non-premade sounds
let velocity = random();
let time = 0;
let dur = 1/6;
let note = random(["Fb4", "G4"]);

function preload(){
   
  //premade sounds
  // mysound[1] = loadSound("assets/life.wav");
  // mysound[2] = loadSound("assets/hjm-tesla_sound_shot.wav");
  // mysound[3] = loadSound("assets/loseSound.wav");
  // mysound[4] = loadSound("assets/pcp.ogg");

  //images and icons
  whiteOrb = loadImage("assets/Lightless.png");
  yellowOrb = loadImage("assets/Flameless.png");



}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  grid = createEmpty2DArray(gridSize, gridSize);
  monoSynth = new p5.MonoSynth();
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
  
}
function playSynth() {
  userStartAudio();

  //let note = random(['Fb4', 'G4']);
  // note velocity (volume, from 0 to 1)
  let velocity = random();
  // time from now (in seconds)
  let time = 1;
  // note duration (in seconds)
  let dur = 1/6;

  // monoSynth.play(note, velocity, time, dur);
}

function mousePressed() {
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;
  let cellX = Math.floor(mouseX/ cellWidth);
  let cellY = Math.floor(mouseY/ cellHeight);

 

  if (grid[cellY][cellX] === 0) {
    grid[cellY][cellX] = 1;
    // mysound[3].play();
    monoSynth.play("C4", velocity, time, dur);
  }
  else if (grid[cellY][cellX] === 1) {
    grid[cellY][cellX] = 0;
    monoSynth.play("C4", velocity, time, dur);
    // mysound[4].play();
  }
  
}



function displayGrid(){
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;
  for (let y = 0; y<gridSize; y++){
    for (let x = 0; x<gridSize; x++){
      if (grid[y][x] === 0){
        image(whiteOrb,x *cellWidth, y *cellHeight, cellWidth, cellHeight); 
      }
      else if (grid[y][x] === 1){
        image(yellowOrb,x *cellWidth, y *cellHeight, cellWidth, cellHeight); 
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