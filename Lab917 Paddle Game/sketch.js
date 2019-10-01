// Garrett Faure
// 09/26
var n;
var balls = [];
var p1;
var gameState = 0;
var btnEasy, btnMed, btnHard, btnTitle, btnEnd, btnReset;
var score;
var life;


// setup runs once at the start of your program
function setup(){
// put start code here
var cnv = createCanvas(800, 800);
cnv.position((windowWidth-width)/2, 30);
//loadBalls();
// Buttons for game selection (except title will not be able to be clicked)
btnTitle = new Buttons(250, 100, 300, 50, "Paddle Game", RGB(random(255)));
btnEasy = new Buttons(200, 650, 50, 50, "Easy", RGB(random(255)));
btnMed = new Buttons(375, 650, 50, 50, "Medium", RGB(random(255)));
btnHard = new Buttons(550, 650, 50, 50, "Sicko \n Mode", RGB(random(255)));
}

// Draw runs 30 times a second
function draw(){
  background(255, 255, 255);
  if(gameState = 0){
    titleScreen.run();
  }
  if(mouseX >= 200 &&
  mouseX <= 250 &&
  mouseY >= 700 &&
  mouseY <= 650){
    gameState === 1;
  }
  if(mouseX >= 375 &&
  mouseX <= 425 &&
  mouseY >= 700 &&
  mouseY <= 650){
    gameState === 2;
  } if(mouseX >= 600 &&
    mouseX <= 650 &&
    mouseY >= 700 &&
    mouseY <= 650){
    gameState === 3;
    }
    if(gameState === 1){
    startGame();
    runPaddle();
    runBalls();
  } elseif(gameState === 2){
    playGame();
    runPaddle();
    runBalls();
  } elseif(gameState === 3){
    sickoGame();
    runPaddle();
    runBalls();
  } elseif(gameState === 4){
    endGame();
  }
}
// Number of balls based on the skill level

function endGame(){
  if(gameState === 4){
  if(life === 0){
    background(20, 20, 20);
    btnEnd = new Buttons(350, 100, 100, 50, "YOU LOST! D:", RGB(random(255)));
    btnReset = new Buttons(375, 400, 50, 50, "Start Again?", RBG(random(255)));
    }
  }
}

function titleScreen(){
  btnTitle.run();
  btnEasy.run();
  btnMed.run();
  btnHard.run();
}

runBalls(){
  for(var i = 0; i < n; i++){
  balls[i] = new Ball(random(width), random(height), 3, 3, i)
  }
}

function runPaddle(){
paddle.run();
}

function startGame(){
  life = 30
  n = 10;
  loadBalls(n);
  for(var i = 0; i < balls.length - 1; console.log(i)){
    loadBalls(n++)
  }
}

function playGame(){
  life = 20
  n = 15;
  loadBalls(n);
  for(var i = 0; balls < balls.length - 1; console.log(i)){
    loadBalls(n++2)
  }
}

function sickoGame(){
  life = 10
  n = 20;
  loadBalls(n);
  for(var i = 0; balls < balls.length - 1; console.log(i)){
    loadBalls(n++5)
  }
}

function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), 3, 3, i);
  }
}

// deleting Balls
for(var i = balls.length - 1; i >= 0; i--){
  if(balls[i] < windowHeight){
    balls.splice(i, 1);
  }
}

// nothing likes to work :)
