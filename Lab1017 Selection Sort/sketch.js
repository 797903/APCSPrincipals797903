// Garrett Faure
// 10/04
var list = [];

// setup runs once at the start of your program
function setup(){
// put start code here
var cnv = createCanvas(800, 800);
cnv.position((windowWidth-width)/2, 30);
background(200, 200, 200);// background color

loadNum(100);
selectionSort(list);

}

function loadNum(n){
  for(i = 0; i <= n; i++){
    list[i] = int(random(0, n));
  }
}

function selectionSort(list){
  var min, temp, len = list.length;
  for(var i = 0; i < len; i++){
    min = i;
    for(var q = i + 1; q < len; q++){
       if(list[q] < list[min]){
          min = q;
       }
    }
    temp = list[i]; // swap after inner loop
    list[i] = list[min];
    list[min] = temp;
}
console.log(list)
}
