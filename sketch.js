const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, dustbin, ball;

function preload() {

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width / 2, 600, width, 5, { isStatic: true });
	World.add(world, ground);

	dustbin = new Dustbin(600, 590);

	ball = new Paper(100, 550, 20);

	Engine.run(engine);

}


function draw() {
	background(255);

	fill(255);
	text("Dustbin", 580, 570);
	
	
	rectMode(CENTER);
	fill(255, 192, 203);
	rect(ground.position.x, ground.position.y, width, 5);

    ball.show();

	dustbin.display()

	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(ball.body, ball.body.position, { x: 60, y: -55 });
	}
}