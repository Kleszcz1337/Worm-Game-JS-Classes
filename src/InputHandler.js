export default class InputHandler{

    constructor(player, game){
        document.addEventListener("keydown", event => {
            switch(event.keyCode){
                case 37: 
                    player.moveLeft();
                    break;
                case 38:
                    player.moveUp();
                    break;
                case 39:
                    player.moveRight();
                    break;
                case 40:
                    player.moveDown();
                    break;
            }
        });

        document.addEventListener("keyup", event => {
            if(event.keyCode == 37 || event.keyCode == 39)
                player.stop("x");
            else if(event.keyCode == 38 || event.keyCode == 40)
                player.stop("y");
        });

    }

}