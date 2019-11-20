class Comida{
  constructor(x, y){
    this.loc = createVector(x, y);
    this.clr = color(random(255));
    this.s = 25;
  }

  run(){
    this.render();
    this.relocate();
  }

  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.s, this.s);
  }

  relocate(){
    if(this.loc.x === snake.head.x &&
      this.loc.y === snake.head.y){
      this.loc.x = int(random(0, 32))*25
      this.loc.y = int(random(0, 32))*25
    }
  }
}
