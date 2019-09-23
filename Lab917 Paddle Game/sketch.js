// Garrett Faure
// 09/17
var n = [];
var balls = [];
var p1;

// setup runs once at the start of your program
function setup(){
// put start code here
var cnv = createCanvas(800, 800);
cnv.position((windowWidth-width)/2, 30);
background(20, 20, 20);// background color
loadBalls(5); // change class to loadBalls to equivalent
// Draw FPS (rounded to 2 decimal places) at the bottom left of the screen
// let fps = frameRate();
// fill(255);
// stroke(0);
// text("FPS: " + fps.toFixed(2), 10, height - 10);
}

function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), 3, 3, i)
  }
}

function runBalls(){
  for(var i = 0; i < balls.length; i++){
  }
}

function loadPaddle(){
  paddle = new Paddle(500, 500)
  }

// Draw runs 30 times a second
function draw() {
  background(20, 20, 20);
}

function runPaddle(){
  paddle.run()
}
