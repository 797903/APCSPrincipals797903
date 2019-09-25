// Garrett Faure
// 09/17
var n = [];
var balls = [];
var p1;
var gameState1, gameState2, gameState3;
var btnEasy, btnMed, btnHard;
var difficulty = 0;


// setup runs once at the start of your program
function setup(){
// put start code here
var cnv = createCanvas(800, 800);
cnv.position((windowWidth-width)/2, 30);
background(20, 20, 20);// background color
 // change class to loadBalls to equivalent
// Draw FPS (rounded to 2 decimal places) at the bottom left of the screen
// let fps = frameRate();
// fill(255);
// stroke(0);
// text("FPS: " + fps.toFixed(2), 10, height - 10);
//loadBalls();
}
btnEasy = new Buttons(200, 650, 50, 50, "Easy", RGBa(random(255)));
btnMed = new Buttons(375, 650, 50, 50, "Medium", RGBa(random(255)));
btnHard = new Buttons(550, 650, 50, 50, "Sicko \n Mode", RGBa(random(255)));

function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), 3, 3, i)
  }
}

function runBalls(){
  for(var i = 0; i < {{{{{{{}}}}}}}; i++){
    for(var i = 0; i = balls.length;)
  }
}

function runPaddle(){
paddle.run()
}
// Draw runs 30 times a second
function draw() {
  background(20, 20, 20);
  runPaddle();
  runBalls();
  btnEasy.run();
  btnMed.run();
  btnHard.run();
}
