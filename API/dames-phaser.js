(function () {
    

    // We'll be referring to this a lot
    var game;
    var blacksquare;
    var whitesquare;
    var numSq = 8;
    var sqWidth = 50;
    var spcWidth = 0;
    var alternate = false;
    var sqHeight = sqWidth;
    var w = 1280, h = 720;

    
    // This is the Constructor for the dames interface. 
    // The dames interface constructor owns a copy of the dames game
    DamesER = function (phaserGame, shapes) {
        this.dames = new Dames();
        this.shapes = shapes;
        this.game = phaserGame;
        game = phaserGame;
    }

    DamesER.prototype.preload = function () {
        
        // @TODO this is copied from the game 'Invaders'
        // We should probably use our own assets
        // pieces
        game.load.image('ship', 'art/assets/games/invaders/player.png');
        
        // Backround
       game.load.image('backround', 'art/backDame.png');

       // frame
       game.load.image('frameG', 'art/frameDameG.png');
       game.load.image('frameD', 'art/frameDameD.png');
       game.load.image('freemen', 'art/freemen.png');
        game.load.image('atreides', 'art/Atreides.png');
        game.load.image('ship', 'art/assets/games/invaders/player.png');
        blacksquare = this.shapes.rectangle.define(sqWidth , sqHeight, '#9E6212', 'blacksquare');
        whitesquare = this.shapes.rectangle.define(sqWidth, sqHeight, '#E1932B', 'whitesquare');
    }

    DamesER.prototype.create = function () {

        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.add.sprite(0, 0, 'backround')
        game.physics.arcade.gravity.y = 150;
        game.physics.arcade.gravity.x = -150;

        
        // @TODO this is a proof of concept for placing sprites in a grid.
        // Place the tiles in this manner.
        // Create a sprite for each piece.
        for (var x = calculateStarting(game.width, numSq, sqWidth, spcWidth), i = 0; i < numSq; i++, x+=(sqWidth + spcWidth)) {
           alternator(blacksquare, whitesquare);
            for (var y = calculateStarting(game.height, numSq, sqWidth, spcWidth), j = 0; j < numSq; j++, y += (sqWidth + spcWidth)) {
                this.shapes.rectangle.sprite(5, 5, x, y, alternator(blacksquare, whitesquare));
            }
            }
       // These are the different layers for the backround.

         // Last layer is the caracthers
        /*freemen = game.add.sprite((w/3)/2, h/12, 'freemen');
        freemen.anchor.setTo(0.5, 0.0);

        atreides = game.add.sprite((w-(w/6)), h/12, 'atreides');
        atreides.anchor.setTo(0.5, 0.0);
        
        // Then the frames

        
        frameG = game.add.sprite(0, 0, 'frameG');
        frameG.anchor.setTo(0.0, 0.0);

        frameD = game.add.sprite(w - w/3, 0, 'frameD');
        frameD.anchor.setTo(0.0, 0.0);*/
 }

    DamesER.prototype.update = function () {
        
    }

    DamesER.prototype.render = function () {
        
    }
    
    Rectangle = function(phaserGame) {
        this.game = phaserGame;
    }

    Rectangle.prototype.define = function(width, height, color, key) {
        var drawnObject;
        var bmd = this.game.add.bitmapData(width, height, key, true);
        bmd.ctx.beginPath();
        bmd.ctx.rect(0, 0, width, height);
        bmd.ctx.fillStyle = color;
        bmd.ctx.fill();
        return bmd;
    }

    Rectangle.prototype.sprite = function(width, height, x, y, texture) {
        var sprite;
        sprite = this.game.add.sprite(x, y, texture);
        return sprite;
    }

    // This is the Constructor for the dames interface. 
    // The dames interface constructor owns a copy of the dames game
    Shapes = function (phaserGame) {
        this.game = phaserGame;
        this.rectangle = new Rectangle(this.game);
    }

window.Shapes = Shapes;
window.DamesER = DamesER;

// Placement 
calculateStarting = function (width, numSq, sqWidth, spcWidth){
var boardWidth = (sqWidth * numSq) + (spcWidth * (numSq - 1))

var deadWidth = (width - boardWidth)

return deadWidth /2
}

alternator = function (first, second) {

    if (!alternate) {
        alternate = {"first": first, "second":second, "which": "first"};        
    }

    if (alternate["which"] == "first") {
        alternate["which"] = "second"
    } else {
        alternate["which"] = "first"
    }

    return alternate[alternate["which"]]
}

})()
