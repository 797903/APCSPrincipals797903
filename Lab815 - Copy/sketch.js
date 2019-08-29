//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins

var xRate;

function setup() {
  var cnv = createCanvas(800, 800, WEBGL);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  xRate = 2;

}


//  The draw function is called @ 30 fps
function draw() {
  xRate = xRate + 2

  fill(255, 255, 255)
  square(90, 90, xRate, 400);
}
