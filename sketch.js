var path,runner,bomb,coin;
var pathImg,runnerImg,bombImg,coinImg;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  bombImg = loadImage("bomb.png");
  coinImg = loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;

  runner=createSprite(180,340,30,30);
  runner.addAnimation("Running",runnerImg);
  runner.scale=0.08;

  leftEdge=createSprite(0,400,10,400);
  leftEdge.visible=false;
  rightEdge=createSprite(390,400,10,400);
  rightEdge.visible=false;
}

function draw() {
  background(100);

  if(path.y > 400){
    path.y = height/2;
  }
  runner.x=World.mouseX;
  edges=createEdgeSprites();
runner.collide(edges[3]);
runner.collide(leftEdge);
runner.collide(rightEdge);
drawSprites();
}
