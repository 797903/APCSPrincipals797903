class Bar{
  constructor(x, y, w, h, clr){
    this.loc = createVector(x, y);
    this.w = w;
    this.h = h;
    this.clr = color(random(0, 255), random(0, 255), random(0, 255));
}
}
