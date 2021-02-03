class Polygon {
    constructor(x,y,r){
    var options={
     restitution: 0.5,
     density:2,
     friction:0.7
    }
    this.r=20;
    this.body=Bodies.circle(x,y,20,options);
    this.image = loadImage("polygon.png");
    World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        /*translate(pos.x,pos.y);
        rotate(this.body.angle);*/
        fill("red");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
        pop();
    }
}