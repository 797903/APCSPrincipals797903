class Snake{
  constructor(x, y, w, clr){
    this.head = createVector(x, y);
    this.w = w;
    this.x = x;
    this.y = y;
    this.clr = color(random(0, 255), random(0, 255), random(0, 255));
    this.s = 25;
    this.body = [];
    this.move = createVector(0, 0);
  }

  run(){
    this.update();
    this.checkEdges();
    this.render();
    // tangle();
  }

  render(){
    rect(this.head.x, this.head.y, this.s, this.s);
    fill(this.clr);
  }

  update(){
    this.head.add(this.move);
    this.move.mult(this.w);

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
