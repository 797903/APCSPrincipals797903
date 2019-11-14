class Snake{
  constructor(x, y, dx, dy, w, clr){
    this.head = createVector(x, y);
    this.w = w;
    this.x = x;
    this.y = y;
    this.clr = color(random(0, 255), random(0, 255), random(0, 255));
    this.s = 25;
    this.body = [];

  }

  run(){
    this.render();
    this.move();
    this.checkEdges();
    // tangle();
  }

  render(){
    rect(this.head.x, this.head.y, this.s, this.s);
    fill(this.clr);
  }

  move(){
    var moveDirect
    // up
    if(keyCode === 87 || keyCode === 38){
      this.head.y = this.head.y - this.s;
    }
    // down
    if(keyCode === 83 || keyCode === 40){
      this.head.y = this.head.y + this.s;
    }
    // left
    if(keyCode === 65 || keyCode === 37){
      this.head.x = this.head.x - this.s;
    }
    // right
    if(keyCode === 68 || keyCode === 39){
        this.head.x = this.head.x + this.s;
    }
  }

  checkEdges(){
    //left end
    if(this.head.x < 0){
      endSnake = 'yes';
    }
    if(this.head.x > 800){
      //right end
      endSnake = 'yes';
    }
    if(this.head.y < 0){
      //height end
      endSnake = 'yes';
    }
    if(this.head.y > 800){
      //bottom end
      endSnake = 'yes';
    }
  }
  }
