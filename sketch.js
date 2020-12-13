const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var groundObj;
var score=0
var box1,box2,box3,box4;
var box5,box6,box7,box8,box9;
var chain1;
var poly1;
function preload()
{
	
}

function setup() {
  createCanvas(800, 400);
  textSize(20);
  text("score:" + score,750,100)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 groundObj = new Ground(400,400,800,50);
 box1 = new Box(300,380,30,50);
 box2 = new Box(330,380,30,50);
 box3 = new Box(360,380,30,50);
 box4 = new Box(390,380,30,50);
 box5 = new Box(330,310,30,50);
 box6 = new Box(360,310,30,50);
 box7 = new Box(390,310,30,50);
 box8 = new Box(360,260,30,50);
 box9 = new Box(390,260,30,50);
 box10 = new Box(390,210,30,50);

 poly1= new Ball(100,200,40);

 
 chain1 = new Chain(poly1.body,{x:100,y:270});
	



 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  groundObj.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();


  chain1.display();
  poly1.display();
  
  
  drawSprites();
 
}
function mouseDragged(){ 
  Matter.Body.setPosition(poly1.body, {x: mouseX , y: mouseY});
  } 
  function mouseReleased(){
    chain1.fly();
     } 

     function keyPressed(){
      if(keyCode === 32){
        Matter.Body.setPosition(poly1.body,{x:100,y:270});
        chain1.attach(poly1.body);
      }
      }
      async function time (){
        var worldtime= await fetch("http://worldtimeapi.org/timezone/Asia/Kolkata");
        var jason1= await worldtime.json();
        console.log(jason1);
        var date = jason1.datetime;
        var time1= date.slice(11,13);
        if(time1 >=06 && time1 <= 18){
        background("white");
        } 
        else{
         background("black");
        }
        backgroundImg=laodImage(bg1);
    
    }
      

