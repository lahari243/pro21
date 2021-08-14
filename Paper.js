class Paper {
    constructor(x, y, r) {

        var options = {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
            isStatic: false
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body); 
        this.image = loadImage("paper.png");       
    }

    show() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
       // ellipseMode(RADIUS);
       // fill(255);
       // noStroke();
      //  ellipse(0, 0, this.r);
        imageMode(CENTER);
        image(this.image, 0, 0,70,70);
        pop();
    }
}