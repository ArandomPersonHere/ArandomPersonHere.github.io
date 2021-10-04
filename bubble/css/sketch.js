// double draw the thingg
// Caleb
// oct 1
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let paint = 'black';

function setup() {
  document.addEventListener("contextmenu", event => event.preventDefault());
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  //background(220);

  
  stroke("black");
  line (width/2, height, width/2, pmouseY - 500);
  AColor();
  makeAThing();
  
}



function makeAThing(){
  strokeWeight(5);
  if (mouseIsPressed) {
    strokeWeight(6);
    
    line(mouseX, mouseY, pmouseX, pmouseY);
    
    stroke(paint);
    line (width/2, height, width/2, pmouseY - 500);
     
    if (mouseX <= width/2 && mouseButton === RIGHT){
     
      line(mouseX + width / 2, mouseY, pmouseX + width/ 2, pmouseY);
      //console.log(pmouseX, pmouseY, mouseY,mouseX );
    }
  }
}

function AColor(){
 
  if (keyIsPressed){
    paint =  color(random(255), random(255), random(255));

  }
}