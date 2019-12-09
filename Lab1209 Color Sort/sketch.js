// Garrett Faure
// 08/22
var balls=[];
var n = 20;

// setup runs once at the start of your program
function setup(){
  // put start code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);// background color
  loadBalls(n); // change class to loadBalls to equivalent
  frameRate(5);
}


// Draw runs 30 times a second
function draw() {
  for(var i = 0; i < (balls.length - 1); i++){
    if(balls[i].getR() > balls[i + 1].getR()){
      balls[i].x = 35*i+75;
      balls[i].render();
      swap(i,i+1);
    }
  }
}

function swap(a,b){
temp = balls[a];
balls[a] = balls[b];
balls[b] = temp;
}

function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(i*35+75, 400);
  }
}

function runBalls(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
