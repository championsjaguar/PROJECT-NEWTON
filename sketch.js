const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;






function setup() {
  createCanvas(1500,800);
engine=Engine.create();
world=engine.world;
ground= new Ground(600,600,2000,20);

ball= new Ball(200,200,80,80);
ball2= new Ball(300,200,80,80)
ball3= new Ball(400,200,80,80)
ball4= new Ball(500,200,80,80)
ball5= new Ball(600,200,80,80)
ball6= new Ball(700,200,80,80)

rope=new Rope(ball.body,{x:200,y:50});
rope2=new Rope(ball2.body,{x:300,y:50});
rope3=new Rope(ball3.body,{x:400,y:50});
rope4=new Rope(ball4.body,{x:500,y:50});
rope5=new Rope(ball5.body,{x:600,y:50});
rope6=new Rope(ball6.body,{x:700,y:50});


}

function draw ()
{
  background("white");
  Engine.update(engine);
ground.display();

ball.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
ball6.display();

rope.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
rope6.display();
text("PROJECT NEWTON",750,100) ;
textSize(50);
stroke("black");
}





function mouseDragged(){

Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})


}

















