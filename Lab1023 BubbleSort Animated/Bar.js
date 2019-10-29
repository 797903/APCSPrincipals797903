
class Bar{
  constructor(x, y, w, h, clr){
    this.loc=createVector(x,y);
    this.w=w;
    this.h=h;
  }
  run(){
    this.render();

  }
  render(){
    fill(0, 255, 255);
    rect(this.loc.x,this.loc.y,this.w,this.h);
  }
  set(i){
    this.loc.x = i * 20
  }
}
