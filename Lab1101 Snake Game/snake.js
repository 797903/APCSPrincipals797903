class snake{
  constructor(x, y, clr){
    this.head = createVector(x, y);
    this.x = x;
    this.y = y;
    this.clr = color(0, 0, 0);
    this.s = 25;
    this.body = [];
  }

  run(){
    render();
    move();
    checkEdges();
    thangle();
  }

  render(){
    fill(color(random(0, 255), random(0, 255), random(0, 255)));
    rect(this.head.x, this.head.y, this.s, this.s);
  }

  move(){
    var moveDirect
    // up
    if(keycode === 87 || keycode === 38){
      this.head.y = this.head.y + this.s;
      this.head.x = 0;
    }
    // down
    if(keycode === 83 || keycode === 40){
      this.head.y = this.head.y*-1;
      this.head.x = 0;
    }
    // left
    if(keycode === 65 || keycode === 37){
      this.head.x = this.head.x*-1;
      this.head.y = 0;
    }
    // right
    if(keycode === 68 || keycode === 39){
        this.head.x = this.head.x + this.s;
        this.head.y = 0;
    }

  }

  checkEdges(){
    if(this.head.x < 0 ||
      this.head.x > windowWidth ||
      this.head.y < 0 ||
      this.head.y > windowHeight){
        background(0, 0, 0);
        textSize(75);
        text("YOU DIED", 10, 30);
        fill(255, 0, 0);
      }
    }
  }
}
