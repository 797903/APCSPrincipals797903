class comida{
  constructor(x, y, clr){
    this.loc = createVector(x, y);
    this.x = x;
    this.y = y;
    this.clr = color(random(255));
    this.s = 25;
  }

  run(){
    move();
    render();
  }

  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.s, this.s);
  }




}
