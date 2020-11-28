var Zeniacar,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  Zeniacar=createSprite(50, 200, 50, 50);
  wall=createSprite(1500, 200, 60, height/2);
  wall.shapecolor =color(80,80,80);

speed=random(55,90);
weight=random(400,1500);
}

function draw() {
  background(255,255,255);
  Zeniacar.velocityX = speed;  
  if (Zeniacar.isTouching(wall)) {
    Zeniacar.collide(wall);
  }
  if (wall.x-Zeniacar.x < (Zeniacar.width+wall.width/2))
   {
  Zeniacar.velocityX=0;
  var deformation=0.5*weight*speed* speed/22509;
  if (deformation>180) 
  {
     Zeniacar.shapecolor=color(255,0,0);  
  }  
  if (deformation<180 && deformation>100) 
  {
     Zeniacar.shapecolor=color(230,230,0);  
  }

  if (deformation<100) 
  {
     Zeniacar.shapecolor=color(0,225,0);     
   }
  }
  drawSprites();
}