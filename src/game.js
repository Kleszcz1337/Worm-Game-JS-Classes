import Food from "/src/food.js";
import InputHandler from "/src/InputHandler.js";
import Player from "/src/Player.js";

import { detectCollision } from "/src/detectCollision.js";

const GAME_STATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
}

let score = 0;
let p = document.getElementById("score");

export default class Game{

    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.player = new Player(this);
        this.food = new Food(this);
        this.gameObjects = [];
        this.lives = 3;
        new InputHandler(this.player, this);
    }

    start(){
        this.gameObjects = [
            this.player,
            this.food
        ]
    }

    update(deltaTime){
        this.gameObjects.forEach(object => object.update(deltaTime));

        if(detectCollision(this.player, this.food)){
            score++;
            this.gameObjects.pop();
            this.food = new Food(this);
            this.gameObjects.push(this.food);
            p.innerHTML = "Twoj wynik to: " + score;
        }
        
    }

    draw(ctx){
        this.gameObjects.forEach(object => object.draw(ctx));
    }

}