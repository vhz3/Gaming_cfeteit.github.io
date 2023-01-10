class zone{
    constructor(x,y,d){
        this.position = createVector(x,y);
        this.diameter = d;
    }

    display(c, d){
        push();
        noFill();
        stroke(c);
        strokeWeight(2);
        circle(this.position.x,this.position.y,this.diameter = d);
        pop();
    }

    setPosition(x,y){
        this.position.x = x;
        this.position.y = y;
    }

    getPosition(){
        return this.position;
    }

    setDiameter(d){
        this.diameter = d;
    }

    getDiameter(){
        return this.diameter;
    }
}