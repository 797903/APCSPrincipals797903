class Square{
  Constructor(x, y, clr){
    this.loc = createVector(x, y);
    this.clr = clr;
    this.x = x;
    this.y = y;
  }

  run(){
    this.render()
  }

  render(){
    fill(this.clr)
    rect(this.x, this.y, 20, 20)
  }
}
