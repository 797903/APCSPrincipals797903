class Ball{
  constructor(x, y, dx, dy){
    this.loc = createVector(x, y)
    this.vel = createVector(dx, dy)
    this.acc = createVector(0, 0)
    this.clr = color(random(255), random(255), random(255));
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y
      this.loc.y = height - 2
    }
}
  update(){
    var distToBigFella;
    this.vel.add(this.acc)
    this.loc.add(this.vel)
    if(this.id >= 0){
      distTobigFella = this.loc.dist(bigFella.loc);
      if(distTobigFella < 250){
        // attraction
        this.acc = p5.Vector.sub(bigFella.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }
      if(distTobigFella < 150){
        // attraction
        this.acc = p5.Vector.sub(this.loc, bigFella.loc);
        this.acc.normalize();
        this.acc.mult(0.5);
      }
    }

    // this.x = this.x + this.dx;
    // this.y = this.y + this.dy;
  }
  render(){
    fill(this.clr);
    for(var i = 0; i < 50; i++){ // Middle condition should be same as loadBalls
      ellipse(this.loc.x, this.loc.y, 15, 15)
      // ellipse(this.x, this.y, random(20, 100), random(20, 100)), triangle(this.x, this.y, random(20, 100), random(20,100)), square(this.x, this.y, random(20, 100), random(20, 100)
    }
  }
}
