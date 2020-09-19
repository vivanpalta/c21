var movingRect,fixedRect;
var movingRect1,fixedRect1;
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";

  gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="green"
  gameObject2=createSprite(300,100,50,50);
  gameObject2.shapeColor="green"
  gameObject3=createSprite(500,100,50,50);
  gameObject3.shapeColor="green"
  gameObject4=createSprite(700,100,50,50);
  gameObject4.shapeColor="green"

  fixedRect1=createSprite(1000,100,50,80);
  fixedRect1.shapeColor="blue";
  movingRect1=createSprite(1000,800,80,30);
  movingRect1.shapeColor="blue";
  movingRect1.velocityY=-5;
  fixedRect1.velocityY=5;

}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if(isTouching(gameObject1,movingRect)){
  movingRect.shapeColor="red";
  gameObject1.shapeColor="red";
}
else{
  movingRect.shapeColor="green";
  gameObject1.shapeColor="green";
}
if(isTouching(gameObject2,movingRect)){
  movingRect.shapeColor="red";
  gameObject2.shapeColor="red";
}
else{
  movingRect.shapeColor="green";
  gameObject2.shapeColor="green";
}


    if(isTouching(gameObject3,movingRect)){
      movingRect.shapeColor="red";
      gameObject3.shapeColor="red";
    }
    else{
      movingRect.shapeColor="green";
      gameObject3.shapeColor="green";
    }
    if(isTouching(gameObject4,movingRect)){
      movingRect.shapeColor="red";
      gameObject4.shapeColor="red";
    }
    else{
      movingRect.shapeColor="green";
      gameObject4.shapeColor="green";
    }

    bounceOff(movingRect1,fixedRect1)

  drawSprites();
}
