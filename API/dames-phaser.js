(function () {
    
    // We'll be referring to this a lot
    var game;
    var blacksquare;
    var whitesquare;
    var tokens = {};
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
        this.playerSprites = {};
        game = phaserGame;
    }

    DamesER.prototype.preload = function () {
        // Backround
        game.load.image('backround', 'art/backDame.png');

        // frame
        game.load.image('frame1', 'art/frameDameG.png');
        game.load.image('frame2', 'art/frameDameD.png');
        game.load.image('freemen', 'art/freemen.png');
        game.load.image('atreides', 'art/Atreides.png');
        game.load.image('ship', 'art/assets/games/invaders/player.png');

        //Board Squares
        blacksquare = this.shapes.rectangle.define(sqWidth , sqHeight, '#9E6212', 'blacksquare');
        whitesquare = this.shapes.rectangle.define(sqWidth, sqHeight, '#E1932B', 'whitesquare');
    }

    DamesER.prototype.create = function () {

        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.add.sprite(0, 0, 'backround')
        game.physics.arcade.gravity.y = 150;
        game.physics.arcade.gravity.x = -150;

        this.setupBoard();
        this.dames.setup();
    }

    DamesER.prototype.displayPlayer = function (playerID) {
        
        this.playerSprites[playerID] = display(this.dames.board, playerID, "ship");
        return this.playerSprites[playerID];
    }

    DamesER.prototype.update = function () {
        
    }

    DamesER.prototype.render = function () {
        
    }

        // Sets up the empty board of sprites.
    DamesER.prototype.setupBoard = function() {
        var boardRectangles = [];
        var startingX = calculateStarting(game.width, numSq, sqWidth, spcWidth); 
        var startingY = calculateStarting(game.height, numSq, sqWidth, spcWidth);
        var tWidth = (sqWidth + spcWidth);

        for (var x = startingX, i = 0; i < numSq; i++, x+= tWidth) {
            alternator(blacksquare, whitesquare);
            boardRectangles[x] = [];

            for (var y = startingY, j = 0; j < numSq; j++, y += tWidth) {
                boardRectangles[x][y] = this.shapes.rectangle.sprite(5, 5, x, y, alternator(blacksquare, whitesquare));
            }
        }
        return boardRectangles;
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
        return this.game.add.sprite(x, y, texture);
    }

    // This is the Constructor for the dames interface. 
    // The dames interface constructor owns a copy of the dames game
    Shapes = function (phaserGame) {
        this.game = phaserGame;
        this.rectangle = new Rectangle(this.game);
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

    // Placement 
    calculateStarting = function (width, numSq, sqWidth, spcWidth){
        var boardWidth = (sqWidth * numSq) + (spcWidth * (numSq - 1));
        var deadWidth = (width - boardWidth);
        return deadWidth /2;
    }

    display = function (board, identity, sprite) {

        if (!tokens["player" + identity]) {
            tokens["player" + identity] = {}
        }

        var playerTokens = tokens["player" + identity];
        for (var x = 0; x < board.length; x++) {
            for (var y = 0; y < board[x].length; y++) {
                if (board[x][y] == identity) {
                    canvasCoords = ccfbc(x, y);
                    var currentToken = tokens["player" + identity]["token" + x + y] = this.game.add.sprite(canvasCoords.x, canvasCoords.y, sprite);
                    currentToken.anchor.setTo(0.5,  0.5);
                    currentToken.inputEnabled = true;
                    currentToken.input.enableDrag(true);
                }
            }
        }
    }

    // Get canvas coords from board coords
    ccfbc = function (bx, by) {
        var cxs = calculateStarting(game.width, numSq, sqWidth, spcWidth);
        var cys = calculateStarting(game.height, numSq, sqWidth, spcWidth);
        
        var dx  = (sqWidth + spcWidth) * bx;
        var dy  = (sqWidth + spcWidth) * by;
        
        var cx = cxs + dx + (sqWidth / 2);
        var cy = cys + dy + (sqWidth / 2);
        return {x: cx, y: cy};
    }

window.Shapes = Shapes;
window.DamesER = DamesER;

})()
