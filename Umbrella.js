class Umbrella {
    constructor(x,y){
        var options = {
            'isStatic':true,
            
        }
        this.image = loadImage("walking_1.png");
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        //this.x = x;
        //this.y = y;

        World.add(world,this.body);
    }


    display(){
       var pos = this.body.position;
        //var angle = this.body.angle;
        //push();
        //translate(pos.x,pos.y);
        //otate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,300,300);
        //pop();

    }
}