// First Demo


let triangleVerticies = [
  {x:500, y:-50},
  {x:50, y:750},
  {x:1800, y:850},
];
let theDegree = 0;
let theColors = ["red", "blue", "black", "green", "purple", "white", "yellow","violet","red", "blue", "black", "green", "purple", "white", "yellow","violet"];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  sierpinski(triangleVerticies, theDegree);
}

function mousePressed(){
  if (theDegree < 12) {
    theDegree++;
  }
}

function sierpinski(points, degree) {
  noStroke();
  fill(theColors[degree]);
  triangle(points[0].x,points[0].y,points[1].x,points[1].y,points[2].x,points[2].y);
  
  //exitclause
  if (degree>0){
    //pattern
    sierpinski([points[0],
      getMidpoint(points[0], points[1]),
      getMidpoint(points[0], points[2])],
    degree -1);

    sierpinski([points[1],
      getMidpoint(points[0], points[1]),
      getMidpoint(points[1], points[2])],
    degree -1);
    
    sierpinski([points[2],
      getMidpoint(points[0], points[2]),
      getMidpoint(points[1], points[2])],
    degree -1);
  }
}

function getMidpoint(point1, point2) {
  let xDiff = point1.x + point2.x;
  let yDiff = point1.y + point2.y;
  let midpoint = {x: xDiff/2, y: yDiff/2};
  return midpoint;
}