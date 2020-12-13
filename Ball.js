class Ball {
    constructor(x,y,radius) { 
        var options={ 
            isStatic:false, 
            restitution:0.3, 
            friction:0.5, 
            density:1.2 
           } 
           this.x=x;
            this.y=y; 
            this.radius=radius
             this.body=Bodies.circle(this.x, this.y, this.radius/2, options)
             this.image = loadImage("polygon.png");
              World.add(world, this.body);
            } display() { 
                var pos=this.body.position; 
                push() 
                translate(pos.x, pos.y);
                 //rectMode(CENTER)
                 imageMode(CENTER)
                  strokeWeight(5); 
                  stroke("black");
                   fill("pink");
                   // ellipse(0,0,this.radius, this.radius); 
                   image(this.image,0,0,this.radius,this.radius);
                    pop()
                    } 
                   }