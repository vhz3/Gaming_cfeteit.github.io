class chronos{
    constructor(x,y,d){
        this.position = createVector(x,y);
        this.d = d;
    }

    display(c){
        push();
        stroke(0);
        strokeWeight(0.5);
        fill(c);
        circle(this.position.x,this.position.y,this.d);
        pop();
    }

    checkBound(){
        if(this.position.x + this.d/2 >= width && this.position.y + this.d/2 >= height){
            this.position.x = width - this.d/2;
            this.position.y = height - this.d/2;
        }else if(this.position.x - this.d/2 <= 0 && this.position.y + this.d/2 >= height){
            this.position.x =  this.d/2;
            this.position.y = height - this.d/2;
        }else if(this.position.x - this.d/2 <= 0 && this.position.y - this.d/2 < 0){
            this.position.x =  this.d/2;
            this.position.y = this.d/2;
        }else if(this.position.x + this.d/2 >= width && this.position.y - this.d/2 < 0){
            this.position.x =  width - this.d/2;
            this.position.y = this.d/2;
        }
        else if(this.position.x - this.d/2 <= 0){
            this.position.x = 0 + this.d/2;
        }else if(this.position.y + this.d/2 >= height){
            this.position.y = height - this.d/2;
        }else if(this.position.y - this.d/2 <= 0){
            this.position.y = 0 + this.d/2;
        }else if(this.position.x + this.d/2 >= width){
            this.position.x = width - this.d/2;
        }
    }

    setPosition(x,y){
        this.position.x = x;
        this.position.y = y;
    }

    getPosition(){
        return this.position;
    }

    getDiameter(){
        return this.d;
    }
}