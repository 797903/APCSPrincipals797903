class Square{
  Constructor(x, y, w, h, clr){
    this.loc = createVector(x, y);
    this.clr = clr;
    this.w = w;
    this.h = h;
  }

  run(){
    this.render();
    this.update();
  }

  render(){
    fill(this.clr)
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }
} //end
