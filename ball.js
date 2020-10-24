class Ball {

    constructor(x,y,width,height)
    {
    
        var options={
            restitution: 1,
           frictionAir:0.0,  
           friction : 0,
           slop: 1,
           inertia: Infinity
    
        }
    this.body= Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;
    World.add(world,this.body)
    
    
    
    }
    
    
    display() {
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y)
    rotate(angle);
    rectMode(CENTER);
    fill("blue");
    stroke("red");
    strokeWeight(4);
    ellipse(0,0,this.width,this.height);

    pop();

    
    
    }
    
              }