class Rain {
    constructor(x,y){
        var options = {
           // 'isStatic':false,
            'restitution' :0.1,
            'friction' : 0.001
        }
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
        this.x = x;
        this.y = y;

        World.add(world,this.rain);
    }

    reposition(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }

    display(){
        var pos = this.rain.position;
        //var angle = this.rain.angle;
       // push();
        //translate(pos.x,pos.y);
        //rotate(angle);
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,5,5);
        //pop();

    }

}