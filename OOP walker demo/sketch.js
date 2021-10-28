// OOP walker demo
let kayaan, nick;


function setup() {
  createCanvas(windowWidth, windowHeight);
  kayaan = new Walker(width/3, height/3,"blue");
  nick = new Walker(width/3*2,  height/3, "purple");
  hannah = new Walker(width/2,  height/2, "red");
 

}

function draw() {
  kayaan.move();
  nick.move();
  hannah.move();
  hannah.display();
  nick.display();
  kayaan.display();

}


class Walker {
  constructor (x, y, theColor){
    this.x = x;
    this.y = y;
    this.color = theColor;
    this.speed = random(25);
    this.size = this.speed;
  }

  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);
  }

  move(){
    let choice = random(100);
    if (choice<25 && this.y >=0){
      this.y -=this.speed;
    }
    else if (choice<50 && this.y <=height){
      this.y +=this.speed;
    }
    else if (choice<75&& this.y >=0){
      this.x -=this.speed;
    }
    else if (choice<100&& this.y <=width){
      this.x +=this.speed;
    }


  }
}