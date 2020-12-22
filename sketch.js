
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var paper,ground,bin1,bin2,bin3;

function preload(){
	
}

function setup() {
	 createCanvas(1400, 700);
  
	
	 engine = Engine.create();
	 world = engine.world;

	 paper = new Paper(100, 600, 10);

     ground = new Ground(700, 680, 1400, 20);
  
	   bin1 = new Dustbin(950, 620, 20, 100);
     bin2 = new Dustbin(1035, 660, 155, 20);
     bin3 = new Dustbin(1120, 620, 20, 100);


     Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();

  ground.display();

  bin3.display();
  bin1.display();
  bin2.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position, 
		   {x:25, y: -15})
	}

  }


