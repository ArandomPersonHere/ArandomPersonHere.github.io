// double draw the thingg
// Caleb
// oct 1
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let paint = 'black';
let bgcolor = 255;

function setup() {
  document.addEventListener("contextmenu", event => event.preventDefault());
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {


  //background("white");
  stroke("black");
  line (width/2, height, width/2, pmouseY - 500);

//desides the color using KeyisPressed
  AColor();
  // makes the line(s)
  makeAThing();
  
}



function makeAThing(){
  strokeWeight(5);
  stroke(paint);
  if (mouseIsPressed && mouseX <= width/2) {
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
    if (keyCode === SHIFT){
    paint =  color(random(255), random(255), random(255));
    }
    else if (keyCode === RIGHT_ARROW){
      paint =  color(255, random(255), random(255));
    }
    else if (keyCode === DOWN_ARROW){
      paint =  color(random(255), 255, random(255));
    }
    else if (keyCode === LEFT_ARROW){
      paint =  color(random(255), random(255), 255);
    }
    else{
      paint = random(255) + 100;
    }
  }
}