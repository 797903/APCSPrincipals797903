// Garrett Faure
// 09/12
var ships = [];
var sliderAtt, sliderVel;
var bigFella;

// setup runs once at the start of your program
function setup(){
// put start code here
var cnv = createCanvas(800, 800);
cnv.position((windowWidth-width)/2, 30);
background(200, 100, 50);// background color
loadBalls(1); // change class to loadBalls to equivalent

sliderAtt = createSlider(1, 400, 200);
sliderAtt.position(100, 400);
sliderVel = createSlider(1, 255, 100);
sliderVel.position(100, 450);
}

function draw() {
  background(200, 100, 50);
  runBalls();

}

function loadBalls(n){
for(var i = 0; i < n; i++){
  ships[i] = new ship(200, 200, 3, 3, 0);
  }
  bigFella = new ball(width/2, height/2, random(-2.5, 2.5), random(-2.5, 2.5), -1, color(0, 0, 0));
  }

function runBalls(){
  for(var i = 0; i < ships.length; i++){
    ships[i].run();
  }
  bigFella.run();
}
