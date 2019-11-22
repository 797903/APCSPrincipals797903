// Garrett Faure
// 11/01

//var body = [];
var numCol, snakeWidth;
// setup runs once at the start of your program
function setup(){
  // put start code here
  var cnv = createCanvas(800, 800);
  snakeWidth = 25;
  numCol = width/snakeWidth;
  cnv.position((windowWidth-width)/2, 30);
  background(200, 200, 200);
  frameRate(10);
  endSnake = 'no';
  // add grid interval to even out movement
  snake = new Snake(16, 16, 0, 0, snakeWidth, color(random(0, 255), random(0, 255), random(0, 255)));
  comida = new Comida(int(random(0, 32))*25, int(random(0, 32))*25, color(random(0, 255), random(0, 255), random(0, 255)))
}
// Draw runs 30 times a second
function draw(){
background(200, 200, 200);
runSnake();
runComida();
keyPressed();


if(endSnake === 'yes'){
    clear();
    background(0, 0, 0);
    fill(255, 10, 40);
    text('YOU DIED');
}

}
function runSnake(){
  snake.run();
}

function runComida(){
  comida.run();
}

function keyPressed(){
  if(keyCode === 38){// up
    snake.vel = createVector(0, -1);
    // snake.vel.x -= 0;
    // snake.vel.y -= 25;
  }
  // down
  if(keyCode === 40){
    snake.vel = createVector(0, 1);
  }
  // left
  if(keyCode === 37){
    snake.vel = createVector(-1, 0);
  }
  // right
  if(keyCode === 39){
    snake.vel = createVector(1, 0);
  }
}
