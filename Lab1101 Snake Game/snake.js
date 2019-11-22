class Snake{
  constructor(x, y, dx, dy, w, clr){
    this.head = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.w = w;
    this.x = x;
    this.y = y;
    this.clr = color(random(0, 255), random(0, 255), random(0, 255));
    this.s = snakeWidth;
    this.body = [];
    //this.move = createVector(0, 0);
  }



  run(){
    this.update();
    this.checkEdges();
    this.comidaCollision();
    this.render();
    // tangle();
  }

  render(){
    fill(20, 200, 80);
    rect(this.head.x*this.s, this.head.y*this.s, this.s, this.s);

  }

  update(){
    this.head.add(this.vel);

  }

  checkEdges(){
    //left end
    if(this.head.x < 0){
      endSnake = 'yes';
    }
    if(this.head.x > windowWidth){
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

  comidaCollision(){
    if(this.head.x === comida.loc.x &&
    this.head.y === comida.loc.y){
      this.body.push(createVector(this.head.x, this.head.y));
    }
  }
}
