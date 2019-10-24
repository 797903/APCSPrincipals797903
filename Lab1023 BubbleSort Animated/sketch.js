// Garrett Faure
// 10/04
var bars=[];
n = 100
//put setup code here
function setup(){
  var cnv=createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(200);
  loadBars(n);
  for(var i=0; i<bars.length; i++){
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

function bubbleSort(){
  for (var i = bars.length-1; i > 0; i--){
    for (var j = 0; j < i; j++){
      if(bars[j].h > bars[j + 1].h){
        swap(bars, j, j+1);
      }
    }
  }
}

function loadBars(){
  for (var i = 0; i < 32; i++){
    var j = int(random(n));
    bars[i]= new Bar(25 * i, 800 - (25 * j), 25, (25 * j))
  }
}

function swap(list, a, b){
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}

// var list = [];
//
// // setup runs once at the start of your program
// function setup(){
// // put start code here
// var cnv = createCanvas(800, 800);
// cnv.position((windowWidth-width)/2, 30);
// background(200, 200, 200);// background color
//
// loadNum(10);
// bubbleSort(list);
//
// }
//
// function draw(){
//   for(var i = 0; )
// }
//
// function loadNum(n){
//   for(i = 0; i <= n; i++){
//     list[i] = int(random(0, n));
//   }
// }
//
// function bubbleSort(list){
//   for(var j = list.length; j > 0 ; j --){
//       for (var i = 0 ; i < list.length; i ++){
//           if (list[i+1] < list [i]){
//             var temp = list[i];
//             list[i] = list[i+1];
//             list[i+1] = temp;
//           }
//         }
//       }
//     }
