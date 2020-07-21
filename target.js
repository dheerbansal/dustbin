class TargetClass{
    constructor(x,y,width,height){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      

      World.add(world,this.body);
    }
    display(){
        //this.body = bodies.circle(x,y,radius);
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        pop();
      }
};