// Garrett Faure
// 08/22
var balls=[];

// setup runs once at the start of your program
function setup(){
// put start code here
var cnv = createCanvas(800, 800);
cnv.position((windowWidth-width)/2, 30);
background(20, 20, 20);// background color
// b1 = new Ball(random(width), random(height), random(-5,5), random(-5,5));
// b2 = new Ball(random(width), random(height), random(-5,5), random(-5,5));
// b3 = new Ball(random(width), random(height), random(-5,5), random(-5,5));
// b4 = new Ball(random(width), random(height), random(-5,5), random(-5,5));
loadBalls(200); // change class to loadBalls to equivalent
}


// Draw runs 30 times a second
function draw() {
  background(20, 20, 20);
  runBalls();
}

function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), random(-8, 8), random(-8, 8))
  }
}

function runBalls(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
