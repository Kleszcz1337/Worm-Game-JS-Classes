export default class player {
    constructor(game){
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.size = 40;

        this.maxSpeed = 5;
        this.speed = {
            x: 0,
            y: 0
        };

        this.position = {
            x: game.gameWidth / 2 - this.size / 2,
            y: game.gameHeight / 2 - this.size / 2
        };

    }

    moveLeft(){
        this.speed.x = -this.maxSpeed;
    }

    moveRight(){
        this.speed.x = this.maxSpeed;
    }

    moveUp(){
        this.speed.y = -this.maxSpeed;
    }

    moveDown(){
        this.speed.y = this.maxSpeed;
    }

    stop(axis){
        if(axis === "x")
            this.speed.x = 0;
        else if(axis == "y")
            this.speed.y = 0;
    }

    draw(ctx){
        ctx.fillStyle = "#0ff"; //light blue
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime){
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
            
        //x
        if(this.position.x < 0)
            this.position.x = 0;
        if(this.position.x + this.size > this.gameWidth)
            this.position.x = this.gameWidth - this.size;

        //y
        if(this.position.y < 0)
            this.position.y = 0;
        if(this.position.y + this.size > this.gameHeight)
            this.position.y = this.gameHeight - this.size;
    }
}