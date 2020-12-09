class Bbox {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':1.5,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 20,40, options);
    this.width = 20;
    this.height = 40;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    
    rectMode(CENTER);
    fill(135,206,234);
    
    rect(0, 0, this.width, this.height);
    pop();
  }
};