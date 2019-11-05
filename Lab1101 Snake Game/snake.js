class snake{
  constructor(x, y, clr){
    this.loc = createVector(x, y);
    this.x = x;
    this.y = y;
    this.clr = color(random(255));
    this.s = 25
  }

  run(){
    render();
    move();
    checkEdges();
  }

  render(){
    fill(color(random(0, 255), random(0, 255), random(0, 255)));
    rect(this.loc.x, this.loc.y, this.s, this.s);
  }

  move(){
    var moveDirect
    // up
    if(keycode === 87 || keycode === 38){
      this.loc.y = this.loc.y + this.s;
    }
    // down
    if(keycode === 83 || keycode === 40){
      this.loc.y = this.loc.y - this.s;
    }
    // left
    if(keycode === 65 || keycode === 37){
      this.loc.x = this.loc.x - this.s;
    }
    // right
    if(keycode === 68 || keycode === 39){
        this.loc.x = this.loc.x - this.s;
    }
  }

  checkEdges(){
    var death = 0;
    if(this.loc.x < 0 ||
      this.loc.x > windowWidth ||
      this.loc.y < 0 ||
      this.loc.y > windowHeight){
        death = 1;
        if(death === 1){

        }
    }
  }
}
