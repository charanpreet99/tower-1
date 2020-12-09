
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,ground1,ground2;
var pox1,pox2,pox3,pox4,pox5,pox6,pox7;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,
	box11,box12,box13,box14,box15,box16;
var gox1,gox2,gox3,gox4,gox5,gox6,gox7,gox8,gox9,gox10,gox11;
var pux1,pux2,grox,sling,poly;	


function preload()
{
	
}

function setup() {

	createCanvas(900, 500);

    engine = Engine.create();
	world = engine.world;

	ground  = new Ground(450,495,1000,15);
	ground1 = new Ground(370,400,200,10);
	ground2 = new Ground(700,250,200,10);

	box1 = new Bbox(300,380);
	box2 = new Bbox(320,380);
	box3 = new Bbox(340,380);
	box4 = new Bbox(360,380);
	box5 = new Bbox(380,380);
	box6 = new Bbox(400,380);
	box7 = new Bbox(420,380);
	box8 = new Bbox(440,380);
	
	box9  = new Bbox(630,230);
	box10 = new Bbox(650,230);
	box11 = new Bbox(670,230);
	box12 = new Bbox(690,230);
	box13 = new Bbox(710,230);
	box14 = new Bbox(730,230);
	box15 = new Bbox(750,230);
	box16 = new Bbox(770,230);

	pox1 = new Pbox(320,340);
	pox2 = new Pbox(340,340);
	pox3 = new Pbox(360,340);
	pox4 = new Pbox(380,340);
	pox5 = new Pbox(400,340);
	pox6 = new Pbox(420,340);
	pox7 = new Pbox(702,110);

	gox1 = new Gbox(340,300);
	gox2 = new Gbox(360,300);
	gox3 = new Gbox(380,300);
	gox4 = new Gbox(400,300);

	gox5  = new Gbox(650,190);
	gox6  = new Gbox(670,190);
	gox7  = new Gbox(690,190);
	gox8  = new Gbox(710,190);
	gox9  = new Gbox(730,190);
	gox10 = new Gbox(750,190);
	
    pux1 = new PUbox(360,260);
	pux2 = new PUbox(380,260);

	grox1 = new GRbox(370,220);

	grox2 = new GRbox(710,150);
	grox3 = new GRbox(690,150);

	poly = new Poly(300,200);
	sling = new Sling(poly.body,{x:150,y:200});
	

    Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  ground1.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box10.display();

  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  
  pox1.display();
  pox2.display();
  pox3.display();
  pox4.display();
  pox5.display();
  pox6.display();
  pox7.display();

  gox1.display();
  gox2.display();
  gox3.display();
  gox4.display();

  gox6.display();
  gox7.display();
  gox8.display();
  gox9.display();
 
  poly.display();
  pux1.display();
  pux2.display();

  grox1.display();
  grox2.display();
  grox3.display();

  sling.display();

  fill("white");
  stroke("black");
  textSize(20);
  text("Drag the Hexagonal Stone and Release it to launch towards the blocks",160,30);

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling.fly();
}



