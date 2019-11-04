class comida{
  constructor(x, y){
    this.loc = createVector(x, y);
    this.clr = color(random(255));
    this.s = 25;
  }

  run(){
    this.render();
  }

  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.s, this.s);
  }
}
