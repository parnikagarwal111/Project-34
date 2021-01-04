class Pendulum {

    constructor(x, y,color) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y,25, options);
        this.radius=25;
        this.color=color;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke(255);
        fill(0);
        ellipse(0,0,this.radius,this.radius);
        pop();
      }

}
