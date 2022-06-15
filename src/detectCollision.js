export function detectCollision(player, gameObject){
    //Player
    let bottomOfPlayer = player.position.y + player.size;
    let topOfPlayer = player.position.y;
    let leftSideOfPlayer = player.position.x;
    let rightSideOfPlayer = player.position.x + player.size;

    //other object
    let topOfObject = gameObject.position.y;
    let leftSideOfObject = gameObject.position.x;
    let rightSideOfObject = gameObject.position.x + gameObject.size;
    let bottomOfObject = gameObject.position.y + gameObject.size;

    if(
        topOfObject >= topOfPlayer &&
        bottomOfObject <= bottomOfPlayer &&
        rightSideOfObject <= rightSideOfPlayer &&
        leftSideOfObject >= leftSideOfPlayer 
    ){
        return true;
    }else{
        return false;
    }
}