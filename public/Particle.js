
class Particle {
    constructor(x, y){

    this.pos = createVector(x, y);
    
    this.vel = createVector(); //p5.Vector.random2D();
    
    this.acc = createVector();
    }

    update = function() {
        this.vel.add(this.acc);
        this.vel.limit(1);
        this.pos.add(this.vel);
        this.acc.mult(0);
    };

    show = function() {
        fill(41, 241, 195);
        noStroke();
        ellipse(this.pos.x, this.pos.y, 3,3);
    };

    attracted = function(target) {
        
        var force = p5.Vector.sub(target, this.pos);
        var d = force.mag();
        d = constrain(d, 1, 25);
        var G = 50;
        var strength = G / (d * d);
        force.setMag(strength);
        if (d < 20) {
            force.mult(-10);
        }
        this.acc.add(force);
    };
}