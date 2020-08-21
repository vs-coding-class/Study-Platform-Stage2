const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var nextProblem,checkProblem,nextProblemBody,checkProblemBody;
var secondNextProblem,secondCheckProblem;


function preload(){
  nextProblem = loadImage("next_problem_button.png");
  checkProblem = loadImage("check_problem_button.png");
  secondNextProblem = loadImage("button_next-problem_mouse_over.png");
  secondCheckProblem = loadImage("button_check-problem_mouse_over.png");
}

function setup() {
  createCanvas(1450,800);
  engine = Engine.create();
  world = engine.world;

  nextProblemBody = new Button(nextProblem,125,300);
  checkProblemBody = new Button(checkProblem,125,380)
}

function draw() {
  background(255,255,255);
  Engine.update(engine);

  nextProblemBody.display();
  checkProblemBody.display();
}