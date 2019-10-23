// Garrett Faure
// 10/04
var list = [];

// setup runs once at the start of your program
function setup(){
// put start code here
var cnv = createCanvas(800, 800);
cnv.position((windowWidth-width)/2, 30);
background(200, 200, 200);// background color

loadNum(10);
bubbleSort(list);

}

function loadNum(n){
  for(i = 0; i <= n; i++){
    list[i] = int(random(0, n));
  }
}

function bubbleSort(list){
  for(var j = list.length; j > 0 ; j --){
      for (var i = 0 ; i < list.length; i ++){
          if (list[i+1] < list [i]){
            var temp = list[i];
            list[i] = list[i+1];
            list[i+1] = temp;
          }
        }
      }
      console.log(list);
    }
