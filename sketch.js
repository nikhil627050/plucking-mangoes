
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var dground,tree,treeimg
var boy,boyimg
var stones
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10

function preload(){
treeimg=loadImage("tree.png");
boyimg=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);

engine = Engine.create();
world = engine.world;

dground=new ground()
stones=new Stone(100,460,23)
mango1=new Mango(160,290,34)
mango2=new Mango(855,325,35)
mango3=new Mango(670,260,35)
mango4=new Mango(730,200,35)
mango5=new Mango(710,320,36)
mango6=new Mango(780,250,35)
mango7=new Mango(825,170,35)
mango8=new Mango(880,260,35)
mango9=new Mango(940,220,35)
mango10=new Mango(980,305,35)

attach=new Throw(stones.body,{x:100,y:465})

tree=createSprite((775,368))
tree.addImage(treeimg)
tree.scale=0.42

boy=createSprite(160,550);
boy.addImage(boyimg)
boy.scale=0.125

Engine.run(engine);

 }

function draw() {
rectMode(CENTER)
background(255)

fill("black")
textSize(18)


detectCollision(stones,mango1)
detectCollision(stones,mango2)
detectCollision(stones,mango3)
detectCollision(stones,mango4)
detectCollision(stones,mango5)
detectCollision(stones,mango6)
detectCollision(stones,mango7)
detectCollision(stones,mango8)
detectCollision(stones,mango9)
detectCollision(stones,mango10)

drawSprites()

stones.display()
dground.display()
mango1.display()
mango2.display()
mango3.display()
mango4.display()
mango5.display()
mango6.display()
mango7.display()
mango8.display()
mango9.display()
mango10.display()

}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	body1.fly()
}
  
function detectCollision(stones,mango){

	if(stones.body.position.x-mango.body.position.x<mango.diametre+stones.diametre
   && mango.body.position.x - stones.body.position.x < mango.diametre + stones.diametre
   &&stones.body.position.y -mango.body.position.y < mango.diametre + stones.diametre
   && mango.body.position.y - stones.body.position.y < mango.diametre + stones.diametre){
	   Matter.Body.setStatic(mango.body,false)
   } 

}

function keyPressed(){
	if(keyCode===32){
       Matter.Body.setPosition(stones.body,{x:100,y:465})
	   attach.Launch(stones.body)
	}
}


