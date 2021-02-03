class Ground {
    constructor(xx,yy,width1,height1){
        var options={
            isStatic: true
        }
        this.W=width1;
        this.H=height1;
        this.body=Bodies.rectangle(xx,yy,width1,height1,options);
        World.add(world,this.body); 
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.W,this.H);

    }
}