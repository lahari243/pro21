class Dustbin {
    constructor(x, y) {
        this.body1 = Bodies.rectangle(x, y, 100, 10, { isStatic: true });
        World.add(world, this.body1);
        this.body2 = Bodies.rectangle(x - 50, y-50, 10, 100, { isStatic: true });
        World.add(world, this.body2);
        this.body3 = Bodies.rectangle(x + 50, y-50, 10, 100, { isStatic: true });
        World.add(world, this.body3);
        this.image = loadImage("dustbingreen.png");
    }

    display() {
        var pos1 = this.body1.position;
        var pos2 = this.body2.position;
        var pos3 = this.body3.position;
        
        rectMode(CENTER);
        fill(255);
        noStroke();
        rect(pos1.x, pos1.y, 100, 10);
        rect(pos2.x, pos2.y, 10, 100);
        rect(pos3.x, pos3.y, 10, 100);
        imageMode(CENTER);
        image(this.image, pos1.x,pos1.y-45,100,100);
    }

}