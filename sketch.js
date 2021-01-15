
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;
var myengine,myworld;
function preload()
{
    bImg=loadImage("sprites/bg.png");
}
function setup()
{
    createCanvas(1200,400);
    myengine=Engine.create();
    myworld=myengine.world;
    bird=new Bird(100,100,50,50);
    ground=new Ground(600,380,1200,50);
    ground1=new Ground(200,300,400,200);
    box1=new Box(720,310,70,70);
    pig1=new Pig(820,330,50,50);
    box2=new Box(920,310,70,70);
    log1=new Log(820,290,300,PI/2);
    
    
    box3=new Box(720,220,70,70);
    pig2=new Pig(820,240,50,50);
    box4=new Box(920,220,70,70);
    log2=new Log(820,200,300,PI/2);

    box5=new Box(820,130,70,70);
    log3=new Log(720,100,130,PI/8);
    log4=new Log(920,100,130,-PI/7);

    slng=new Slingshot(bird.mybodies,{x:200,y:120});
}

function draw()
{   background(bImg);
    Engine.update(myengine);
    bird.display();
    ground.display();
    ground1.display();
    box1.display();
    pig1.display();
    box2.display();
    log1.display();
    box3.display();
    pig2.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    slng.display();
}

function mouseDragged()
{
  Body.setPosition(bird.mybodies,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  slng.fly();
}