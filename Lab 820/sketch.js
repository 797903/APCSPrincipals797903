//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins

var x, y;
var speedX, speedY;
var truthX, truthY;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);

  x = 50
  y = 100

  speedX = 1
  speedY = 1
}

function draw() {

  fill(255, 0, 0)
  ellipse(x, y, 40, 40)

  x = speedX + 4
  y = speedY + 2
  // if (x > 750 or x < 50){
  //
  // }
}
