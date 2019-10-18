// Garrett Faure
// 10/07

var checkers = [];

// setup runs once at the start of your program
function setup(){
// put start code here
var cnv = createCanvas(800, 800);
cnv.position((windowWidth-width)/2, 30);
background(255, 0, 0);// background color

loadCheckers();
    for(var i = 0; i < checkers.length; i++){
      checkers[i].render();
    }
}

function loadCheckers(){
  for (var i = 0; i < 8; i++){
    for(var j = 0; j < 8; j++){
      if(i % 2 === 0){  // if even then this color
        if(j % 2 === 0){
          var clr = color(200, 90, 0);
        }
        if(j % 2 !== 0){ // if odd then other color
          var clr = color(0, 0, 0);
        }
      }
      if(i % 2 !== 0){
        if(j % 2 !== 0){
          var clr = color(200, 90, 0);
        }
        if(j%2===0){
          var clr = color(0, 0, 0);
        }
      }
      checkers[j+(8*i)]= new Square(100 * j, 100 * i, 100, 100, clr);
    }
  }
}
