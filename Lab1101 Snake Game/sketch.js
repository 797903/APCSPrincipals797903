// Garrett Faure
// 11/01

var body = [];

// setup runs once at the start of your program
function setup(){
  // put start code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(200, 200, 200);
  frameRate(13);
  endSnake = 'no';
  // add grid interval to even out movement
  snake = new Snake(400, 400, 10, 10, 25, color(random(0, 255), random(0, 255), random(0, 255)));
  comida = new Comida(int(random(0, 31)*25), int(random(0, 31)*25), color(random(0, 255), random(0, 255), random(0, 255)))
}
// Draw runs 30 times a second
function draw(){
background(200, 200, 200);
runSnake();
runComida();


if(endSnake === 'yes'){
    clear();
    background(0, 0, 0);
    text('YOU DIED')
    fill(255, 10, 40);
}

}
function runSnake(){
  snake.run();
}

function runComida(){
  comida.run();
}
