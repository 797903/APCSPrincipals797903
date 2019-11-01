class snake{
  constructor(x, y, clr){
    this.loc = createVector(x, y);
    this.x = x;
    this.y = y;
    this.clr = color(random(255));
    this.s = 25
  }

  run(){
    move();
    render();
  }

  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.s, this.s);
  }

  move(){
    var moveDirect
    // up
    if(keyCode === 87 or keyCode === 38){
      moveDirect = 1;
    }
    // down
    if(keyCode === 83 or keyCode === 40){
      moveDirect = -1;
    }
    // left
    if(keyCode === 65 or keyCode === 37){
      moveDirect = -2;
    }
    // right
    if(keyCode === 68 or keyCode === 39){
      moveDirect = 2
    }
    if(moveDirect === 1){
      this.loc.y = this.loc.y + this.s;
    }
    if(moveDirect === -1){
      this.loc.y = this.loc.y - this.s;
    }
    if(moveDirect === -2){
      this.loc.x = this.loc.x - this.s;
    }
    if(moveDirect === 2){
      this.loc.x = this.loc.x - this.s
    }
  }

  checkEdges(){
    if(this.loc.x < 0 or
      this.loc.x > windowWidth or
      this.loc.y < 0 or
      this.loc.y > windowHeight){

    }
  }
}
