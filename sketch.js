var banana,bananaimg
var obstacle,obstacleimg
var background,backgroundimg
var obstacleGroup
var foodGroup
var ground
var score
 

function preload (){
  backgroundimg=loadImage("jungle.jpg")
  
  player_running=
  loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaimg=loadImage("banana.png")
  obstacleimg=loadImage("stone.png")
}

function setup() {
  createCanvas(400, 400);
  backdrop=createSprite(200,200,400,400)
  backdrop.addImage(backgroundimg)
  backdrop.velocityX = -2
  monkey=createSprite(200,350,20,30)
  monkey.addAnimation("monkeyy",player_running)
  monkey.scale=0.10

ground=createSprite(200,390,400,5)  
  ground.visible = false;
  
  score=0;
  
  foodGroup=new Group();
  obstacleGroup=new Group();
}

function draw() {
  background(220);
  
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  if (backdrop.x < 0){
      backdrop.x = backdrop.width/2;
    }
  
  if (foodGroup.isTouching(monkey)){
    score=score+2
    foodGroup.destroyEach();
  }
  
  switch (score){
    case 10:monkey.scale=0.12;
      break;
      case 20:monkey.scale=0.14;
      break;
      case 30:monkey.scale=0.16;
       break;
       case 40:monkey.scale=0.18;
       default:break;
  }
  
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale=0.5
    obstacleGroup.destroyEach();
  }
  
  food();
  obstacles();
  
   drawSprites();
  
 
  textSize(20)
  text("Score: "+score,500,50)
 
}

function food (){
  if (World.frameCount%80===0){
  var banana=createSprite(300,250,20,30)
  banana.addImage(bananaimg);
    banana.scale=0.05
    banana.lifetime=150
    foodGroup.add(banana)
    banana.velocityX=-2
  }
}

function obstacles (){
  if (World.frameCount%300===0){
      var obstacle=createSprite(350,350,20,35)
      obstacle.addImage(obstacleimg)
    obstacle.scale=0.2
    obstacle.lifetime=180
    obstacle.velocityX=-2
      }
}



