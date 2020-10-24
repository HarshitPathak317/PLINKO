const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
//var ground1,ground2,ground3,ground4;
//var pinko;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
 


  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
  for (var j = 40; j <=width; j = j + 50) {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15; j <=width-10; j = j + 50) {
    plinkos.push(new Plinko(j,175));
  }

  //createSprite(400, 200, 50, 50);
  /* ground1 = new Ground(10,800,1000,10);
  //ground2 = new Ground(0,10,10,1800);
  ground3 = new Ground(480,10,10,1800);
  ground4 = new Ground(0,0,1000,10); */
}

function draw() {
  background(0); 
  Engine.update(engine);
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  pinko.display();
  drawSprites();
}