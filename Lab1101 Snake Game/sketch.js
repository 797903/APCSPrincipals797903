// Garrett Faure
// 11/01

var body = [];

// setup runs once at the start of your program
function setup(){
  // put start code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(200, 200, 200);
  framerate(10);
  snake = new snake(0, 0, color(random(0, 255), random(0, 255), random(0, 255)));
}
// Draw runs 30 times a second
function draw(){

}
