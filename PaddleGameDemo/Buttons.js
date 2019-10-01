class Buttons{

  constructor(x, y, w, h, msg, clr){
    this.loc = createVector(x, y);
    this.w = w;
    this.h = h;
    this.message = msg;
    this.clr = clr
  }

  run(){
    this.render();
  }

  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h, this.message, this.clr)
  }
}
