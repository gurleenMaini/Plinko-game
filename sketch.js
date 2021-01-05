const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions =  [];
var div_height = 300;

function setup() {
  createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240, 790, 480, 20);

  for (var i = 0; i <= width; i = i + 80){
    divisions.push(new Division(i, height - div_height/2, 10, div_height));
  }

  for (var j = 10; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 35; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 10; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 35; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }
}

function draw() {
  background("black");

  Engine.update(engine);

  ground.display();
  
  for (var i = 0; i < plinkos.length; i++){
    plinkos[i].display(); 
  }

   if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2 - 30, width/2 + 30), 10, 10));
  }
 
  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
}