// creating supply mission 2.
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box,leftS,rightS;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// preloading the images
function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;
   
	// creating a ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
   
	// creating the box
	box = createSprite(400,620,200,20);


	leftS = createSprite(300,580,20,100);
	
	
	rightS = createSprite(500,580,20,100);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	// also creating a ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 	//also creating the box
	box = Bodies.rectangle(400,620,200,20, {isStatic:true} );
	World.add(world, box);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(packageBody,false);
    
  }
}



// thank you for looking at my project :)
