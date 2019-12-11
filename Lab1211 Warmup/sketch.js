// Garrett Faure
// 10/04
var list = [];
var n = 11; // number of numbers
var h = 100; // range of numbers

// setup runs once at the start of your program
function setup(){
  // put start code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(200, 200, 200);// background color

  loadNumbers(n);
  logNumbers();
  mySort(list);
  findAvg();
  findMedian();

}

function loadNumbers(n){
  for(i = 0; i <= n; i++){
    list[i] = int(random(0, h));
  }
}

function mySort(list){
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
  console.log("sorted list: " + list)
}

function logNumbers(){
  console.log("numbers: " + list);
}

function findAvg(){
  for(var i = 0; i < list.length; i++){
    var bigA;
    if(i === 0){
      bigA = list[i];
    } else {
      bigA = list[i] += list[i-1];
    }
  }
  console.log("average: " + bigA/list.length);
}

function findMedian(){
  if(list.length-1%2 != 0){
    console.log("median left: " + list[(list.length-1)/2-0.5]);
    console.log("median right   : " + list[(list.length-1)/2+0.5]);
    console.log("combined median: " + (list[(list.length-1)/2-0.5] + list[(list.length-1)/2+0.5])/2)
  } else if(list.length-1%2 === 0) {
    console.log("median: " + list[list.length/2]);
  }
}
