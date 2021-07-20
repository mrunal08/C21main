const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var top_wall,left,right;
var button1,button2;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  button1=createImg("push.png");
  button1.position(220,30)
button1.size(50,50);
button1.mouseClicked(hforce)

button1=createImg("push.png");
button1.position(20,150)
button1.size(50,50);
button1.mouseClicked(vforce)

  ground=new Ground(200,390,400,20)
  top_wall=new Ground(200,10,400,20)
  right_wall=new Ground(360,200,20,400)
  left_wall=new Ground(40,200,20,400)

  var ball_options = {
    restitution: 0.95
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
   ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  top_wall.show();
  right_wall.show();
  left_wall.show();
  Engine.update(engine);
}

function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:0})
}

function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}