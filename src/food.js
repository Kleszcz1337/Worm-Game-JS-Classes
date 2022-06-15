export default class Food{
    constructor(game){
        this.game = game;
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;

        this.size = 15;
        this.isVisible = true;

        this.position = {
            x: Math.floor(Math.random() * (this.gameWidth - this.size)),
            y: Math.floor(Math.random() * (this.gameHeight - this.size))
        }
    }

    draw(ctx){
        ctx.fillStyle = "green";
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime){
        this.position.x += Math.random() < 0.5 ? -1 : 1;
        this.position.y += Math.random() < 0.5 ? -1 : 1;
            
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