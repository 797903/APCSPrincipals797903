class Paddle{
  constructor(x, y){

    this.loc = createVector(0, -1)
    this.clr = (random(255), random(255), random(255))
    this.loc.x = x
    this.loc.y = y
  }

  run(){
    this.update()
    this.render()
  }

  update(){
    var mouseLoc = createVector(mouseX, 700);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, 0.09);
  }

  render(){
    fill(this.clr)
    rect(this.x, this.y, 20, 20)
  }
}
