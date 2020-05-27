var zenia, wall;
var cyclop,wall;
var tourus , wall;
var speed , weight;

function setup() {
  createCanvas(800,400);
 zenia = createSprite(100, 200, 20, 10);
 zenia.shapeColor = "white"
 wall1 = createSprite(500,200,10,50)
 wall1.shapeColor = "blue"

tourus = createSprite(200,100,20,10);
tourus.shapeColor = "white"
wall2 = createSprite(500,100,10,50);
wall2.shapeColor = "blue"

cyclop = createSprite(80,300,20,10);
cyclop.shapeColor = "white"
wall3 = createSprite(500,300,10,50);
wall3.shapeColor = "blue"
}

function draw() {
  background(200,255,255); 

if(zenia.collide(wall1)){
  zenia.shapeColor = "red"
}
if(tourus.collide(wall2)){
  tourus.shapeColor = "green"
}
if(cyclop.collide(wall3)){
  cyclop.shapeColor = "yellow"
}

  zenia.velocityX = 60;
  tourus.velocityX = 50;
  cyclop.velocityX = 45;

  drawSprites();
}
function collide1(){
  if(wall1.x-zenia.x < (zenia.width+wall1.width)/2){
    zenia.velocityX=0;
    var deformation=0.5 * 2260 * 60 * 60 / 22500;
    if(deformation>180){
      zenia.shapeColor = "red"
    }
}
if(wall2.x-tourus.x < (tourus.width+wall2.width)/2){
  tourus.velocityX=0;
  var deformation=0.5 * 1522 * 50 * 50 / 22500;
  if(deformation<100){
    tourus.shapeColor = "green"
  }

}
if(wall3.x- cyclop.x < (cyclop.width+wall3.width)/2){
  tourus.velocityX=0;
  var deformation=0.5 * 1522 * 50 * 50 / 22500;
  if(deformation<100 && deformation>180){
    cyclop.shapeColor = "yellow"
  }
}
}


