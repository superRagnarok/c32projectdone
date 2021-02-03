class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.8,
            density:0.1,
            friction:0.7
            
           
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.height=height;
        this.width=width;
        World.add(world,this.body);
        this.visibility;
    }
    display(){
        var pos=this.body.position;
        if (this.body.speed<7.5){
            push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        stroke("white");
        this.visibility=this.visibility-5;
        tint(255,this.visibility);
        rect(0,0,this.width,this.height);
        pop();
        }
        else {
            World.remove(world,this.body);  
            
        }
    }
    
    
}