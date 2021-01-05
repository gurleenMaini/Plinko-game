class Particle {
    constructor(x, y, radius){
        var options = {
            restitution:0.4
        }
      
        this.body = Bodies.circle(x, y, radius, options);       
        this.colour = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        fill(this.colour)
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 10);
        pop();
    }
};