class Slingshot{
    constructor(body1,point2){
        var options={
            bodyA: body1,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
    this.sling=Constraint.create(options);
    this.pointB=point2;
    World.add(world,this.sling);

    }
display(){
    
    if (this.sling.bodyA){
        var posA = this.sling.bodyA.position;
    var posB = this.pointB;
        stroke(0);
        strokeWeight(3);
        line(posA.x,posA.y,posB.x,posB.y);
    }
    
}
fly(){
    this.sling.bodyA=null;

}
attach(polypoly){
    this.sling.bodyA=polypoly;
}
}