// Garrett Faure
// 09/26
var n;
var balls = [];
var p1;
var gameState = 0;
var btnEasy, btnMed, btnHard, btnTitle;
var score;
var life;


// setup runs once at the start of your program
function setup(){
// put start code here
var cnv = createCanvas(800, 800);
cnv.position((windowWidth-width)/2, 30);
background(20, 20, 20);// background color
//loadBalls();
}
// Buttons for game selection (except title will not be able to be clicked)
btnTitle = new Buttonns(250, 100, 300, 50, "Paddle Game", RGB(random(255)));
btnEasy = new Buttons(200, 650, 50, 50, "Easy", RGB(random(255)));
btnMed = new Buttons(375, 650, 50, 50, "Medium", RGB(random(255)));
btnHard = new Buttons(550, 650, 50, 50, "Sicko \n Mode", RGB(random(255)));

// Number of balls based on the skill level


function runBalls(n){
  for(var i = 0; i < n; i++){
    for(var i = 0; i = balls.length;);
  }
}

function runPaddle(){
paddle.run();
}

function startGame(){
  life = 75
  n = 10;
  loadBalls(n);
  for(var i = 0; i < balls.length - 1; console.log(i)){
    loadBalls(n++)
  }
}

function playGame(){
  life = 50
  n = 15;
  loadBalls(n);
  for(var i = 0; balls < balls.length - 1; console.log(i)){
    loadBalls(n++2)
  }
}

function sickoGame(){
  life = 25
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
for(var i = balls.length - 1; i >= 0; i--);
  if(balls[i] < windowHeight){
    balls.splice(i, 1);
  }
  btnEasy.run();
  btnMed.run();
  btnHard.run();
// Draw runs 30 times a second
function draw() {
  background(20, 20, 20);
  if(mouseX > )
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
  }
}
