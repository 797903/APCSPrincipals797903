// Garrett Faure
// 10/29
var bars=[];
n = 100

function setup(){
  var cnv=createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(200);
  loadBars(n);
  frameRate(10);
  for(var i = 0; i < bars.length; i++){
    bars[i].run();
  }
}

function draw(){
  bubbleSort()
}
function move(){
  for(var i=0; i < bars.length; i++){
    bars[i].set(i);
  }
}

for(var i=0; i<bars.length; i++){
  bars[i].run();
}

function bubbleSort(){
  for (var i = bars.length-1; i > 0; i--){
    for (var j = 0; j < i; j++){
      if(bars[j].h > bars[j + 1].h){
        swap(bars, j, j+1);
        move();
      }
    }
  }
}

function loadBars(){
  for (var i = 0; i < n; i++){
    var j = int(random(windowHeight/25));
    bars[i]= new Bar(25 * i, 800 - (20 * j), 20, (20 * j))
  }
}

function swap(list, a, b){
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}
