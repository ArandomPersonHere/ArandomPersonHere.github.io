// recursion demo, circle

let theColors = ["white", "red", "blue", "yellow", "green", 
                 "orange", "purple", "violet","white", "red", "blue", "yellow", "green", 
                 "orange", "purple", "violet"];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  recursiveCircle(width/2, height/2, height, 0);
}
let circleCount = 0;
function recursiveCircle(x, y, diameter, level) {
  noStroke();
  fill(theColors[level]);
  circle(x, y, diameter);

  if (diameter > 4) {
    recursiveCircle(x - (mouseX/width/2)*diameter, y - (mouseY/height/2)*diameter, diameter/2, level+1);
    circleCount++;
    //recursiveCircle(x - (mouseX/width/2)*diameter, y + (mouseY/height/2)*diameter, diameter/2, level+1);
    
    recursiveCircle(x + (mouseX/width/2)*diameter, y + (mouseY/height/2)*diameter, diameter/2, level+1);
    
    //recursiveCircle(x + (mouseX/width/2)*diameter, y - (mouseY/height/2)*diameter, diameter/2, level+1);
  
  }
  console.log(circleCount);
}
