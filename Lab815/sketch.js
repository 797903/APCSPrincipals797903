//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins


function setup() {
  var cnv = createCanvas(800, 800, WEBGL);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);

}


//  The draw function is called @ 30 fps
function draw() {

  sphere(200, 64, 64); // Sphere with radius of 200 and detail level of 64
}
// add red lines and lower sphere opacity
