var oceanImg, ocean;
var coinImg, coin, coinGroup;
var climberImg, climber, climbersGroup;
var frog, frogImg;
var gameState = "play"
var score = 0;

function preload(){
  oceanImg = loadImage("water.jpg");
  coinImg = loadImage("coin.png");
  climberImg = loadImage("seaweed.png");
  frogImg = loadImage("frog.png");
  
}

function setup(){
  createCanvas(580,450);
  
  ocean = createSprite(300,300);
  ocean.addImage("ocean",oceanImg);
  
  frog = createSprite(200,200,50,50);
  frog.scale = 0.1;
  frog.addImage("frog", frogImg);  
  
  //create coin group and climber group
  
}

function draw(){
  background(0);
  drawSprites();
  
  if (gameState === "play") {
  
    score = score + Math.round(frameCount/300);
    ocean.setVelocity(0,-2);

    if(keyDown("up") && frog.position.y > 100){
      frog.position.y -= 5;
    }
    if(keyDown("down") && frog.position.y < 240){
      frog.position.y += 5;
    }
    

    spawnCoin();

  }
  
  if (gameState === "end"){
    

  }

  if(ocean.position.y < 200){
    ocean.position.y = 300;
    }

}

// create the coin and climber in the same function
function spawnCoin() {
  
  if (frameCount % 280 === 0) {
    //make the x position of the coin and climber the same
    climber = createSprite(Math.round(random(10,750)),80,200,50);
    climber.addImage("climber",climberImg);
    climber.setVelocity(-5,0);
    
    climber.scale = 0.5;
    climber.lifetime = 160;
    
    climberGroup.add(climber);

    coin = createSprite(climber.x,90,20,20);
    coin.addImage("bomb falling",coinImg);
    coin.setVelocity(0,5);
    
    coin.scale = 0.1;
    
    coin.lifetime = 60;
    
    coinGroup.add(coin);
   
  }
}

