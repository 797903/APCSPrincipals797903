class ball{
  constructor(x, y, dx, dy, id, clr){
    this.loc = createVector(x, y)
    this.vel = createVector(dx, dy)
    this.acc = createVector(0, 0)
    this.clr = clr;
    this.w = 50
    this.id = id

  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
    if(this.id < 0){
      if(this.loc.x < 0){
        this.loc.x = width;
      }
      if(this.loc.x > width){
        this.loc.x = 0;
      }
      if(this.loc.y < 0){
        this.loc.y = height;
        }
      if(this.loc.y > height){
        this.loc.y = 0;
    }
  }
}

  update(){
    var distToShip;
    this.vel.add(this.acc)
      distToShip = this.loc.dist(ship.loc);
      if(distToShip < 125){
        this.loc.x = int(random(0, windowWidth));
        this.loc.y = int(random(0, height));
      }
    this.loc.add(this.vel);
    this.vel.limit(5);

  }
  render(){
    fill(0, 0, 0);
    ellipse(this.loc.x, this.loc.y, this.w, this.w)
  }
}
