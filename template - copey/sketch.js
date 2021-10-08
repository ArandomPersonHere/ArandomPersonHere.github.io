
// 

let rectHeights = [];
let numberOfRects = 400;

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  gennerateTerrain();
}

function draw() {
  background("purple");
}

function displayTerrain(){
  let theWidth = width/ rectHeights.length;
  for (let i =0; i<rectHeights.length; i++){
    let theHeight = rectHeights[i];
    fill("black");
    rect(theWidth*i, height, 10, - theHeight);

  }

}

function gennerateTerrain(){
  let time = 0;
  for (let i = 0; i<100; i++){
    let theHeight = noise(time) * height;
    rectHeights.push(theHeight);
    time += 0.002;
  }
}