class Paddle{
  constructor(x, y, w, h)
    this.loc = createVector(0, -1)
    this.clr = (random(255), random(255), random(255))
    this.w = 250
    this.h = 25
}

run(){
  this.update()
  this.render()
}

update(){
  var mouseLoc - createVector(mouseX, 700);
  this.loc = p5.Vector.lerp(this.loc, mouseLoc, 0.09);
}

render(){
  fill(this.clr)
  rect(50, 20,)
}
