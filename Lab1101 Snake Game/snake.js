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
  }



  run(){
    this.update();
    this.checkEdges();
    this.comidaCollision();
    // this.tangle();
    this.render();
  }

  render(){
    fill(20, 200, 80);
    rect(this.head.x*this.s, this.head.y*this.s, this.s, this.s);

    for (var i=0; i<this.body.length; i++){
      rect(this.body[i].x*this.w,this.body[i].y*this.w, this.w, this.w);
    }
  }

  update(){
    //vel
    this.head.add(this.vel);
    //add segments
    if(this.head.x === comida.loc.x &&
    this.head.y === comida.loc.y){
      for(var i=this.body.length-1; i>0; i--){
        this.body[i].x=this.body[i-1].x;
        this.body[i].y=this.body[i-1].y;
      }
      if(this.body.length-1===0){
      //first segment to head
      this.body[0].x=this.head.x;
      this.body[0].y=this.head.y;
    }
  }
}


  checkEdges(){
    //left end
    if(this.head.x < 0){
      endSnake = 1;
    }
    if(this.head.x >= 32){
      //right end
      endSnake = 1;
    }
    if(this.head.y < 0){
      //height end
      endSnake = 1;
    }
    if(this.head.y >= 32){
      //bottom end
      endSnake = 1;
    }
    //move to center
    if(endSnake === 1){
      this.head.x = 16;
      this.head.y = 16;
    }
  }

  // tangle(){
  //   for(var i = snake.body.length-1; i >= 0; i--){
  //     if(snake.head.x === snake.body[i].x &&
  //       snake.head.y === snake.body[i].y){
  //         endSnake = 1;
  //       }
  //     }
  //   }
  //
    comidaCollision(){
    if(this.head.x*25===comida.loc.x &&
        this.head.y*25===comida.loc.y){
          this.body.push(createVector(this.head.x, this.head.y));
          }
        }
  }
