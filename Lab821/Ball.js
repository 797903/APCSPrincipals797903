class Ball{
  constructor(x, y, dx, dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    // this.clr = color(random(255), random(255), random(255));
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
    if(this.x < 0){
      this.dx = -this.dx;
    }
    if(this.x > width){
      this.dx = -this.dx;
    }
    if(this.y < 0){
      this.dy = -this.dy;
    }
    if(this.y > height){
      this.dy = -this.dy;
    }
}
  update(){
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  }
  render(){
    this.clr = color(random(255), random(255), random(255));
    fill(this.clr);
    for(var i = 0; i < 200, i++){
      random(ellipse(this.x, this.y, random(20, 100), random(20, 100))
      // ellipse(this.x, this.y, random(20, 100), random(20, 100)), triangle(this.x, this.y, random(20, 100), random(20,100)), square(this.x, this.y, random(20, 100), random(20, 100)
    }
  }
}
