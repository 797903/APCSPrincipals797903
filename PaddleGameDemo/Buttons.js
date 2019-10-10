class Buttons{

  constructor(x, y, w, h, msg, r, g, b){
    this.loc = createVector(x, y);
    this.w = w;
    this.h = h;
    this.r = r;
    this.g = g;
    this.b = b;
    this.message = msg;
  }

  run(){
    this.render();
  }

  render(){
    fill(this.r, this.g, this.b);
    rect(this.loc.x, this.loc.y, this.w, this.h, this.message, this.clr)
  }
}
