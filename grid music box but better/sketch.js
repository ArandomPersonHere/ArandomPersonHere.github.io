//grid project 
// what i want it to do 
// 1 - play different audio files in different parts of the grid
// 2 - simultainiously play audio files in a collum
// 3 - have an auto play feature that visually dispays what collum it's playing





// 
let gridSize = 20;
let grid;
//let mysound =[];


let whiteOrb, yellowOrb, greenOrb,  blueOrb,  greyOrb,  swirlOrb,  reallyWhiteOrb;
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
  greenOrb = loadImage("assets/greenOrb.png");
  greyOrb = loadImage("assets/greYOrb.png");
  swirlOrb = loadImage("assets/Empty Orb.png");
  reallyWhiteOrb = loadImage("assets/LightOrb.png");
}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  grid = createEmpty2DArray(gridSize, gridSize);
 

  monoSynth = new p5.MonoSynth();
  // a simple C scale with C4 = 0
  note = [ "A4","B4", "C4", "D4", "E4","F4", "G4","A5", "B5", "C5"];
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
    
    playSynth(grid[i][0]);
    console.log(grid[i][0]);
  
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

  //master if/else statement to avoid pain
  if  (grid[cellY][cellX] === 6) {
    playSynth(grid[cellY][cellX]);
    grid[cellY][cellX]  = 0;
  }
  else{
    playSynth(grid[cellY][cellX]);
    grid[cellY][cellX] ++;
  }
  //saved 50 lines
}



function displayGrid(){
  let myOrbs = [
    whiteOrb,
    yellowOrb,
    greenOrb, 
    blueOrb, 
    greyOrb, 
    swirlOrb, 
    reallyWhiteOrb
  ]; 
  
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;

  for (let y = 0; y<gridSize; y++){
    for (let x = 0; x<gridSize; x++){
      //make grid icons
      //master statement to avoid pain
      image(myOrbs[grid[y][x]],x *cellWidth, y *cellHeight, cellWidth, cellHeight);
      // saved 25 lines
    }
  }
}

function createRandom2DArray(rows,cols, numToFill = 0){
  let grid = [];
  for (let y = 0; y<rows; y++){
    grid.push([]);
    for (let x = 0; x<cols; x++) {

      // one line to save you from if/ifelse pain
      let num = random(0, 7);

      grid[y].push(num);
      // // saves 20 lines

      // if (random(100) <10){
      //   grid[y].push(0);
      // }
      // else if (random(100) <20){
      //   grid[y].push(1);
      // }
      // else if (random(100) <30){
      //   grid[y].push(2);
      // }
      // else if (random(100) <40){
      //   grid[y].push(3);
      // }
      // else if (random(100) <50){
      //   grid[y].push(4);
      // }
      // else if (random(100) < 60){
      //   grid[y].push(5);
      // }
      // else{
      //   grid[y].push(6);
      // }
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