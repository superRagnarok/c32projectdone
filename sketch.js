const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21,box22,box23,box24,box25;
var ground1, stand1, stand2;
var polygon1;
var slingshot;
var backgroundImg,bg_img;

function preload(){
getBackgroundImage();
}
function setup(){
    var canvas = createCanvas(1500,400);
    engine = Engine.create();
    world = engine.world;
    //1st pyramid
    box1 = new Box(600,200,40,50);
    box2 = new Box(640,200,40,50);
    box3 = new Box(680,200,40,50);
    box4 = new Box(720,200,40,50);
    box5 = new Box(560,200,40,50);
    box6 = new Box(520,200,40,50);
    box7 = new Box(480,200,40,50);

    box8 = new Box(600,150,40,50);
    box9 = new Box(640,150,40,50);
    box10 = new Box(680,150,40,50);
    box11 = new Box(560,150,40,50);
    box12 = new Box(520,150,40,50);

    box13 = new Box(600,100,40,50);
    box14 = new Box(640,100,40,50);
    box15 = new Box(560,100,40,50);

    box16 = new Box(600,50,40,50);
//2nd pyramid
    box17 = new Box(1150,150,40,50);
    box18 = new Box(1190,150,40,50);
    box19 = new Box(1230,150,40,50);
    box20 = new Box(1110,150,40,50);
    box21 = new Box(1070,150,40,50);

    box22 = new Box(1150,100,40,50);
    box23 = new Box(1190,100,40,50);
    box24 = new Box(1110,100,40,50);

    box25 = new Box(1150,50,40,50);


    ground1= new Ground(750,390,1500,20);
    stand1= new Ground(600,300,350,20);
    stand2= new Ground(1150,250,300,20);
    polygon1 = new Polygon(100,200);
    slingshot = new Slingshot(polygon1.body,{x:100,y:200});

}

function draw(){
    if (backgroundImg){
    background(backgroundImg);
    }
    Engine.update(engine);
fill("yellow");
    box1.display();
fill("red");    
    box2.display();
    fill("yellow");
    box3.display();
    fill("red");
    box4.display();
    fill("red");
    box5.display();
    fill("yellow");
    box6.display();
    fill("red");
    box7.display();
    fill("lime");
    box8.display();
    fill("orange");
    box9.display();
    fill("lime");
    box10.display();
    fill("orange")
    box11.display();
    fill("lime");
    box12.display();
    fill(255);
    box13.display();
    fill("blue");
    box14.display();
    box15.display();
    fill("coral");
    box16.display();
    fill("red");
    box17.display();
    fill("lime");
    box18.display();
    fill(255);
    box19.display();
    fill("yellow");
    box20.display();
    fill("orange");
    box21.display();
    fill("blue");
    box22.display();
    fill("magenta");
    box23.display();
    fill(1,254,244);
    box24.display();
    fill(255,0,161);
    box25.display();
    
    ground1.display();
    stand1.display();
    stand2.display();
    polygon1.display();
    slingshot.display();
    
textSize(20);
    text("press space to get another chance",750,15);

}
function mouseDragged(){
    Matter.Body.setPosition(polygon1.body,{x: mouseX, y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
    
    }
function keyPressed(){
    if (keyCode===32){
        slingshot.attach(polygon1.body);
    }
}   
async function getBackgroundImage(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var dataJSON = await response.json();
    var dateTime = dataJSON.datetime;
    var r = dateTime.slice(11,13);
    if (r>=6 && r<=19){
    bg_img = "bg.png";
    }
    else{
        bg_img = "bg2.jpg";
    }
    backgroundImg = loadImage(bg_img);
    } 
