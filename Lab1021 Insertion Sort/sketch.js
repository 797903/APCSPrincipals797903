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
insertionSort(list);

}

function loadNum(n){
  for(i = 0; i <= n; i++){
    list[i] = int(random(0, n));
  }
}

function insertionSort(){
  for (i = 1; i < list.length; i++) {
    var min, temp
    for (j = 0; j < i; i++) {
      min = i
      if (list[i] < list[j]) {
        min =
      }
    }
  }
  console.log(list)
}
