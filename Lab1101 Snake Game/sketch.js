// Garrett Faure
// 11/01

var body = [];

// setup runs once at the start of your program
function setup(){
  // put start code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(200, 200, 200);
  frameRate(10);
  snake = new Snake(windowWidth/2, windowHeight/2, color(random(0, 255), random(0, 255), random(0, 255)));
  comida = new Comida(int(random(0, windowWidth)), int(random(0, windowHeight)), color(random(0, 255), random(0, 255), random(0, 255)))
}
// Draw runs 30 times a second
function draw(){
background(200, 200, 200);
runSnake();
runComida();

}
function runSnake(){
  snake.run();
}

function runComida(){
  comida.run();
}
