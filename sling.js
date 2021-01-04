class Sling{
    constructor(bodyA, pointB){
        const Constraint=Matter.Constraint
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            angularStiffness:1,
            length: 200
        }
        this.pointB=pointB;
        this.pointX=bodyA.x;
        this.pointY=bodyA.y-250;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("#fff")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}