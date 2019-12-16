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
  // buttons for game selection (except title will not be able to be clicked)
  btnTitle = new buttons(250, 100, 300, 50, "Paddle Game", color(int(random(0, 255))));
  btnEasy = new buttons(200, 650, 50, 50, "Easy", color(int(random(0, 255))));
  btnMed = new buttons(375, 650, 50, 50, "Medium", color(int(random(0, 255))));
  btnHard = new buttons(550, 650, 50, 50, "Sicko \n Mode", color(int(random(0, 255))));
}

// Draw runs 30 times a second
function draw(){
  background(20, 20, 20);

    titleScreen();
   if(gameState === 1){
    startGame();
    runPaddle();
    runBalls();
  } else if(gameState === 2){
    playGame();
    runPaddle();
    runBalls();
  } else if(gameState === 3){
    sickoGame();
    runPaddle();
    runBalls();
  } else if(gameState === 4){
    endGame();
      }
    }

  // Number of balls based on the skill level

  function titleScreen(){
    btnTitle.run();
    btnEasy.run();
    btnMed.run();
    btnHard.run();
  }

  function runBalls(){
    for(var i = 0; i < n; i++){
      balls[i] = new ball(random(width), random(height), 3, 3, i)
    }
  }

  function runPaddle(){
    paddle.run();
  }

  function startGame(){
    life = 30
    n = 5;
    loadBalls(n);
    if(balls.length <= 0){
      loadBalls(n++)
    }
  }

  function playGame(){
    life = 20
    n = 8;
    loadBalls(n);
    if(balls.length <= 0){
      loadBalls(n += 2)
    }
  }

  function sickoGame(){
    life = 10
    n = 10;
    loadBalls(n);
    if(balls.length <= 0){
      loadBalls(n+=5)
    }
  }

  function loadBalls(n){
    for(var i = 0; i < n; i++){
      balls[i] = new ball(random(width), random(height), 3, 3, i);
    }
  }

  // deleting Balls
  function spliceBalls(){
    for(var i = balls.length - 1; i >= 0; i--){
      if(balls[i] < windowHeight){
        balls.splice(i, 1);
      }
    }
  }

  function endGame(){
    if(gameState === 4){
      if(life === 0){
        background(20, 20, 20);
        btnEnd = new buttons(350, 100, 100, 50, "YOU LOST! D:", color(int(random(0, 255))));
        btnReset = new buttons(375, 400, 50, 50, "Start Again?", RBG(random(255)));
      }
    }
  }
  // nothing likes to work :)
