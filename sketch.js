
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bob1, bob2, bob3, bob4, bob5;
var rope1,rope2,rope3,rop4,rope5;

function preload() {
		
}

	function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	//bob1
	bob1=new Pendulum(400,390);
	rope1=new Sling(bob1.body,{x:400,y:200});
	//bob2
	bob2=new Pendulum(450,390);
	rope2=new Sling(bob2.body,{x:450,y:200});
	//bob3
	bob3=new Pendulum(500,390);
	rope3=new Sling(bob3.body,{x:500,y:200});
	//bob4
	bob4=new Pendulum(550,390);
	rope4=new Sling(bob4.body,{x:550,y:200});
	//bob5
	bob5=new Pendulum(600,390);
	rope5=new Sling(bob5.body,{x:600,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  
  if (keyDown("up")){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-25,y:-15});
}

	//bob1
	bob1.display();
	rope1.display();
	//bob2
	bob2.display();
	rope2.display();
	//bob3
	bob3.display();
	rope3.display();
	//bob4
	bob4.display();
	rope4.display();
	//bob5
	bob5.display();
	rope5.display();
 
}



