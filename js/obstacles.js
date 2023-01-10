class obstacle{
    constructor(x,y,d){
        this.position = createVector(x,y);
        this.diameter = d;
        this.velocity = createVector(0,0);
    }

    display(c){
        fill (c);
        circle(this.position.x,this.position.y,this.diameter);
    }
    
    move(){
        this.velocity.add(random(-0.2,0.20),random(-0.20,0.20));
        this.position.add(this.velocity);
    }

    checkBound(){
        if(this.position.y + this.diameter/2 > height || this.position.y - this.diameter/2 < 0){
            this.velocity.y *= -1;
        }
        if(this.position.x + this.diameter/2 > width || this.position.x - this.diameter/2 < 0){
            this.velocity.x *= -1;
        }
    }
 
    powerReaction(n){
        this.velocity.mult(n);
    }

    setPosition(x,y){
        this.position.x = x;
        this.position.y = y;
    }

    getPosition(){
        return this.position;
    }

    getDiameter(){
        return this.diameter;
    }

    getVelocity(){
        return this.velocity;
    }

}