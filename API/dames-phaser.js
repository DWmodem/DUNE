(function () {

    // We'll be referring to this a lot
    var game;

    // This is the Constructor for the dames interface. 
    // The dames interface constructor owns a copy of the dames game
    DamesER = function (phaserGame) {
        this.dames = new Dames();
        this.game = phaserGame;
        game = phaserGame;
    }

    DamesER.prototype.preload = function () {
        
        // @TODO this is copied from the game 'Invaders'
        // We should probably use our own assets
        game.load.image('bullet', 'art/assets/games/invaders/bullet.png');
        game.load.image('enemyBullet', 'art/assets/games/invaders/enemy-bullet.png');
        game.load.spritesheet('invader', 'art/assets/games/invaders/invader32x32x4.png', 32, 32);
        game.load.image('ship', 'art/assets/games/invaders/player.png');
        game.load.spritesheet('kaboom', 'art/assets/games/invaders/explode.png', 128, 128);
        game.load.image('starfield', 'art/assets/games/invaders/starfield.png');
        game.load.image('background', 'art/assets/games/starstruck/background2.png');
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
                piece = game.add.sprite(x, y, 'kaboom');
                piece.anchor.setTo(0.5, 0.5);
                game.physics.enable(piece, Phaser.Physics.ARCADE);
            }
        }
        
    }

    DamesER.prototype.update = function () {
        
    }

    DamesER.prototype.render = function () {
        
    }
    

window.DamesER = DamesER;

})()