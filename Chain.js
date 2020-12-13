class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 1

        }
        this.pointB=pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
     attach (body){
        this.chain.bodyA = body;
    }
    
    fly (){
        this.chain.bodyA =null;
    }
    display(){
        if(this.chain.bodyA){
        var posA = this.chain.bodyA.position;
        var posB = this.pointB;
        push ();
        strokeWeight(4);
        line(posA.x, posA.y, posB.x, posB.y);
        pop();
        }
    }
    
}