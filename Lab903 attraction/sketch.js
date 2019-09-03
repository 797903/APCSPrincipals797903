// Garrett Faure
// 08/22
var balls=[];
var bigFella;

// setup runs once at the start of your program
function setup(){
// put start code here
var cnv = createCanvas(1000, 800);
cnv.position((windowWidth-width)/2, 30);
background(20, 20, 20);// background color
loadBalls(50); // change class to loadBalls to equivalent
// Draw FPS (rounded to 2 decimal places) at the bottom left of the screen
let fps = frameRate();
fill(255);
stroke(0);
text("FPS: " + fps.toFixed(2), 10, height - 10);
}

// Draw runs 30 times a second
function draw() {
  background(20, 20, 20);
  runBalls();
}

function loadBalls(n){
  bigFella = new Ball(random(width), random(height), random(2, -2), random(2, -2), -1)
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), .5, .5)
  }
}

function runBalls(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
