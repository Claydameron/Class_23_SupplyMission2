var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,dropzone;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dropzoneB1,dropzoneB2,dropzoneB3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	dropzoneB1 = createSprite(400,647.5,200,25);
	dropzoneB1.shapeColor = "red";

	dropzoneB2 = createSprite(288,585,25,150);
	dropzoneB2.shapeColor = "red";

	dropzoneB3 = createSprite(512,585,25,150);
	dropzoneB3.shapeColor = "red";


	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true,friction:50});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);


	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageSprite.collide(dropzoneB1);
  packageSprite.collide(dropzoneB2);
  packageSprite.collide(dropzoneB3);
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
	}
	
	if(keyCode === RIGHT_ARROW) {
		helicopterSprite.x = helicopterSprite.x + 10;
		Matter.Body.translate(packageBody,{x:10,y:0});
	}

	if(keyCode === LEFT_ARROW) {
		helicopterSprite.x = helicopterSprite.x - 10;
		Matter.Body.translate(packageBody,{x:-10,y:0});
	}
}