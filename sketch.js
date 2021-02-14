
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var pacman;
var ghost1,ghost2,ghost3,ghost4;
var o1,o2,o3,o4;
var o5,o6,o7,o8,o9,o10;
var o11,o12,o13;
var o14,o15,o16,o17,o18;
var o19,o20,o21;
var o22,o23,o24;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	pacman=new Pacman(200,200,20);
    ghost1=new Ghost(400,200,20);
	ghost2=new Ghost(500,200,20);
	ghost3=new Ghost(600,200,20);
	ghost4=new Ghost(700,200,20);
	o1=new Obstacle(400,5,800,10);
	o2=new Obstacle(400,395,800,10);
	o3=new Obstacle(5,200,10,400);
	o4=new Obstacle(795,200,10,400);

  o5=new Obstacle(200,50,10,100);
  o6=new Obstacle(230,55,50,10);
  o7=new Obstacle(260,30,10,50)
  
  o8=new Obstacle(300,50,10,100);
  o9=new Obstacle(350,50,10,100);
  o10=new Obstacle(325,60,55,10);

  o11=new Obstacle(400,50,10,100);
  o12=new Obstacle(425,95,60,10);
  o13=new Obstacle(425,10,55,10);

  o14=new Obstacle(475,50,10,100);
  o15=new Obstacle(490,10,35,10);
  o16=new Obstacle(515,25,10,40);
  o17=new Obstacle(540,10,35,10);
  o18=new Obstacle(555,50,10,100);

  o19=new Obstacle(590,50,10,100);
  o20=new Obstacle(650,50,10,100);
  o21=new Obstacle(625,60,55,10);

  o22=new Obstacle(690,50,10,100);
  //o23=new Log(720,50,100,PI/7);
  o24=new Obstacle(730,50,10,100);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  pacman.display();
  fill("blue");
  ghost1.display();
  fill("pink");
  ghost2.display();
  fill("green");
  ghost3.display();
  fill("red");
  ghost4.display();
  o1.display();
  o2.display();
  o3.display();
  o4.display();

  o5.display();
  o6.display();
  o7.display();

  o8.display();
  o9.display();
  o10.display();

  o11.display();
  o12.display();
  o13.display();

  o14.display();
  o15.display();
  o16.display();
  o17.display();
  o18.display();

  o19.display();
  o20.display();
  o21.display();

  o22.display();
 // o23.display();
  o24.display();
  drawSprites();
 
}



