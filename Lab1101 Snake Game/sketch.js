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
  frameRate(13);
  endSnake = 'no';
  // add grid interval to even out movement
  snake = new Snake(width/2, height/2, 0, 0, snakeWidth, color(random(0, 255), random(0, 255), random(0, 255)));
  comida = new Comida(int(random(0, 775)), int(random(0, 775)), color(random(0, 255), random(0, 255), random(0, 255)))
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
    text('YOU DIED');
    fill(255, 10, 40);
}

}
function runSnake(){
  snake.run();
}

function runComida(){
  comida.run();
}

function keyPressed(){
  if(keyCode === 87){// up
    snake.head.y -= 25;
  }
  // down
  if(keyCode === 83){
    snake.head.y += 25;
  }
  // left
  if(keyCode === 65){
    snake.head.x -= 25;
  }
  // right
  if(keyCode === 68){
    snake.head.x += 25;
  }
}
