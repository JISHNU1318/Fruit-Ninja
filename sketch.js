var sword;
var play = 1;
var end = 0;
var gameState = 1;
var score = 0;
function preload(){
  sword1 = loadImage("sword.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  enemy = loadImage("alien1.png");
  enemy1 = loadImage("alien2.png");
  gameOverSound = loadSound("gameover.mp3");
  knifeSound = loadSound("knifeSwooshSound.mp3")
  gameOverImage = loadImage("gameover.png");
}

function setup(){
  sword = createSprite(300,200,20,20);
  sword.addImage(sword1);
  sword.scale=0.5;
  
  fruitGroup = new Group();
  enemyGroup = new Group();
}
function draw(){
  background("lightblue");
  
  text("score : "+score,340,20)
  


  if(gameState===1){
    
    sword.x=mouseX;
  sword.y=mouseY;
    
  var selectfruit = Math.round(random(1,4))
    
    
  if(frameCount%100===0){
    
     
    
    if(selectfruit===1){
   createfruit1();
    }
    
  else if(selectfruit===2){
   createfruit2();
    }
  
  
   else if(selectfruit=3){
   createfruit3();
    }
    
    else {
   createfruit4();
    }
    
  }
  
  
  if(frameCount%200===0){
    
    var selectenemy = Math.round(random(1,2))
      
      if(selectenemy==1){
        createenemy();
    }
    
    else{
      createenemy1();
      
    }
  }
     if(sword.isTouching(fruitGroup)){
      fruitGroup.destroyEach();
      score=score+1;
       knifeSound.play();
    }
   
 if(sword.isTouching(enemyGroup)) {
   gameState=0;
   gameOverSound.play();
 }  
  }
    
  
 
  if(gameState===0){
    
    enemyGroup.setVelocityXEach(0)
    fruitGroup.setVelocityXEach(0);
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    
    sword.x=200;
    sword.y=200;
    sword.addImage(gameOverImage);
  }
 
  
  
drawSprites();
}

function createfruit1(){
  f1 = createSprite(-50,20,50,50);
  f1.addImage(fruit1);
  f1.scale=0.2;
  f1.y=random(50,350);
  f1.velocityX=5;
  fruitGroup.add(f1);
}

function createfruit2(){
  f2 = createSprite(-50,20,50,50);
  f2.addImage(fruit2);
  f2.scale=0.2;
  f2.y=random(50,350);
  f2.velocityX=5;
  fruitGroup.add(f2);
}

function createfruit3(){
  f3 = createSprite(350,20,50,50);
  f3.addImage(fruit3);
  f3.scale=0.2;
  f3.y=random(50,350);
  f3.velocityX=-5;
  fruitGroup.add(f3);
}

function createfrui41(){
  f4 = createSprite(350,20,50,50);
  f4.addImage(fruit4);
  f4.scale=0.2;
  f4.y=random(50,350);
  f4.velocityX=-5;
  fruitGroup.add(f4);
}

function createenemy(){
  microbes = createSprite(350,20,50,50);
  microbes.addImage(enemy);
  microbes.y=random(50,350);
  microbes.velocityX=-5;
  enemyGroup.add(microbes);
}

function createenemy1(){
  microbes1 = createSprite(-50,20,50,50);
  microbes1.addImage(enemy1);
  microbes1.y=random(50,350);
  microbes1.velocityX=5;
  enemyGroup.add(microbes1);
}