//OOp timer 

let circleTimer, bgTimer;


function setup() {
  createCanvas(windowWidth, windowHeight);
  circleTimer = new Timer(1000);
  bgTimer = new Timer(3000);
}

function draw() {
  background(220);
  if (bgTimer.isDone()){
    background("blue");
  }
  else{
    background("green");
  }
  if (circleTimer.isDone()){
    fill("red");
    circle (200, 300, 300);
  }
}

function mousePressed(){
  circleTimer.reset();

}
 
class Timer{
  constructor(waitTime){
    this.startTime = millis();
    this.waitTime  = waitTime;

  }

  isDone(){
    return millis() > this.waitTime + this.startTime;
  }

  reset(){  
    this.startTime = millis();

  }


}
