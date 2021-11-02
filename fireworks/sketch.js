// First Demo
let fireworks = [];
function setup() {
  createCanvas(windowWidth, windowHeight);

  
}

function draw() {
  background(220);

  for (let i = fireworks.length -1;i>=0; i-- ){
    if (fireworks[i].isDead()){
      fireworks.splice(i, 1);
    }
    else{
      fireworks[i].move();
      fireworks[i].display();
    }
  }
}

function mousePressed(){
  for (let i = 0; i< 100; i++){
    let myParticle = new Particle(mouseX, mouseY);
    fireworks.push(myParticle);
  }
}

//Size, color, dx, dy, alpha
class Particle {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = random(3, 10);
    this.alpha = 255;
    this.color = color(255, random(255),random(255), this.alpha); 
    this.dx = random(-5,5);
    this.dy = random(-5,5);


  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);

  }

  move(){

    this.alpha--;

    //doesn't flash
    // this.color = color(this.color, this.alpha); 
    //flashes
    this.color = color(255, random(255),random(255), this.alpha); 


    this.x += this.dx;
    this.y += this.dy;
  }
  isDead(){
    return this.alpha <0;
  }
}