var bg,sleep,move,drink,eat,bath,gym;
var astronaut;
function preload(){
  bg=loadImage("images/iss.png");
  sleep=loadAnimation("images/sleep.png");
  brush=loadAnimation("images/brush.png");
  move=loadAnimation("images/move.png","images/move.png","images/move1.png","images/move1.png");
  drink=loadAnimation("images/drink1.png","images/drink2.png")
  eat=loadAnimation("images/eat1.png","images/eat2.png")
  bath=loadAnimation("images/bath1.png","images/bath2.png")
  gym=loadAnimation("images/gym1.png","images/gym2.png")
}

function setup() {
  createCanvas(800, 500);

  astronaut=createSprite(350,250,10,10);
  astronaut.addAnimation("sleep",sleep);
  astronaut.scale=0.09
}

function draw() {
  background(bg);

  drawSprites();
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  fill("yellow");
  text("UP ARROW =brushing",100,50);
  text("DOWN ARROW =gymming",100,70);
  text("LEFT ARROW =eating",100,90);
  text("RIGHT ARROW =bathing",100,110);
  text("M key =moving",100,130);


  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brush",brush);
    astronaut.changeAnimation("brush");
  }


  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gym",gym);
    astronaut.changeAnimation("gym");
  }


  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eat",eat);
    astronaut.changeAnimation("eat");
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bath",bath);
    astronaut.changeAnimation("bath");
  }

  if(keyDown("m")){
    astronaut.addAnimation("move",move);
    astronaut.changeAnimation("move");
    astronaut.velocityX=2;
    astronaut.velocityY=1;
  }
 
}