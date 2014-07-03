$(document).ready(function() {

    var stage;
    var coinSheet;
    var coin;

    letsDoThis();



});
//Allo! Hihn hin
function letsDoThis() {

    stage = new createjs.Stage("board");

    /*Defining the coin*/ //
    coinSheet = new createjs.SpriteSheet({
        framerate: 20,
        images: ["../ART/images/coin-sprite-animation.png"],
        frames: {
            width: 100,
            height: 100,
            count: 10,
            regX: 50,
            regY: 50
        },
        animations: {
            spin: [0, 9, "spin"]
        }
    });
    coin = new createjs.Sprite(coinSheet);
    coin.gotoAndPlay("walk");
    coin.x = 1366 / 2;
    coin.y = 768 / 2;
    coin.addEventListener("click", animateCoin);



    /*DEFINING THE TICKER*/
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick", updateStage);
    console.log("FPS: " + createjs.Ticker.getFPS());

    stage.addChild(coin);

    function animateCoin(event) {

        console.log("Clicked the coin");

        var oldX = coin.x;
        var oldY = coin.y;


        var sign1 = 1;
        var sign2 = 1;

        if (Math.random() >= 0.5) {
            sign1 = -1;
        } else {
            sign1 = 1;
        }
        if (Math.random() >= 0.5) {
            sign2 = -1;
        } else {
            sign2 = 1;
        }

        var deltaX = Math.random() * 400 * sign1;
        var deltaY = Math.random() * 200 * sign2;

        createjs.Tween.get(coin, {
            loop: false
        }).to({
            x: oldX + deltaX,
            y: oldY + deltaY
        }, 500)
        console.log("Going to: ");
        console.log("x =" + (oldX + deltaX));
        console.log("y =" + (oldY + deltaY));
    }
}

function updateStage(event) {
    stage.update();
}