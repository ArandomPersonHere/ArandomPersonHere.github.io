// click local storage 



let clickCount = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(240);



  // current click
  textSize(42);
  fill("black")
  text(clickCount, width/2, height/2);

  //highest click
  textSize(42);
  fill("red");
  text(getItem("highClicker"), 100, 100);

}

function mousePressed(){
  clickCount += Infinity;
  if (clickCount > getItem("highClicker")) {
    storeItem("highClicker", clickCount);

  }
}