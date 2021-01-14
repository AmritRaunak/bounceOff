
var movrect,fixrect;
var ob1,ob2;
var r1,r2,r3,r4,r5;
function setup() {
  createCanvas(800,400);
 movrect= createSprite(200, 200, 50, 50);
 fixrect= createSprite(400, 200, 50, 50);
 r1=createSprite(50, 350, 50, 50);
 r2=createSprite(100, 50, 50, 50);
 r3=createSprite(150, 200, 50, 50);
 r4=createSprite(100, 350, 50, 50);
 r5=createSprite(750, 350, 50, 50);
 movrect.shapeColor="red";
 fixrect.shapeColor="red";

 r1.shapeColor="red";
 r2.shapeColor="red";
 r3.shapeColor="red";
 r4.shapeColor="yellow";
 r5.shapeColor="yellow";

 r1.velocityX=2;
 r5.velocityX=-2;

 r2.velocityY=2;
 r4.velocityY=-2;
}

function draw() {
  background(3,12,30);  
  drawSprites();
  
  movrect.y=mouseY;
  movrect.x=mouseX;

  console.log(fixrect.y-movrect.y);
 
  isTouching(movrect,fixrect);
  isTouching(r1,movrect);
  isTouching(r2,movrect);
  isTouching(r3,movrect);
  isTouching(r4,movrect);
  isTouching(r5,movrect);
  bounceOff(r1,r5);
  bounceOff(r2,r4);
}

