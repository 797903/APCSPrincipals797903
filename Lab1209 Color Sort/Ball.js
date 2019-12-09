class Ball{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.clr = color(int(random(255)), 0, 0);
  }

  run(){
    this.render();
    this.getR();
  }

  render(){
    fill(this.clr);
    for(var i = 0; i < 200; i++){
      ellipse(this.x, this.y, 20, 20);
    }
  }
  getR(){
    return this.clr;
  }
}
