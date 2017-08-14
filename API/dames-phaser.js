(function () {

    // We'll be referring to this a lot
    var game;
    var blacksquare;
    var whitesquare;

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
        game.load.image('ship', 'art/assets/games/invaders/player.png');
        blacksquare = this.shapes.rectangle.define(100, 100, '#FFFFFF', 'blacksquare');
        whitesquare = this.shapes.rectangle.define(100, 100, '#000000', 'whitesquare');
    }

    DamesER.prototype.create = function () {

        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.physics.arcade.gravity.y = 150;
        game.physics.arcade.gravity.x = -150;

        
        // @TODO this is a proof of concept for placing sprites in a grid.
        // Place the tiles in this manner.
        // Create a sprite for each piece.
        for (var x = 50, i = 0; i < 10; i++, x+=50) {
            for (var y = 50, j = 0; j < 10; j++, y += 50){
                this.shapes.rectangle.sprite(50, 50, x, y, blacksquare);
            }
        }
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
        sprite.anchor.setTo(0.5, 0.5);
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

})()
