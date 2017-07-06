//Dames
(function () {

    // Constructor for the Dames game.
    // This is where the properties are defined.
    Dames = function () {

        this.board = new Board;
        this.players = [];
        this.player1 = new Player();
        this.player2 = new Player();

    }

    // Add a method to all Dame objects.
    Dames.prototype.start = function () {
        this.beginRound();

    }

    // Add a method to all Dame objects.
    Dames.prototype.preload = function () {

    }

    Dames.prototype.beginRound = function () {
        this.board.init();
        this.player1.placePlayer1Pieces(this.board);
        this.player2.placePlayer2Pieces(this.board);
    }
    
    // The Board of the dames game. Its state changes over the course of the game.
    Board = function () {
        
        this.SIZE_X = 8;
        this.SIZE_Y = 8;

        tiles = [];
    }

    Board.prototype.init = function () {
        
        for (var x = 0; x < this.SIZE_X; x++) {
            for (var y = 0; y < this.SIZE_Y; y++) {
                this.tiles[x][y] = null;
            }
        }
    }

    // The Move object describing the move a player made
    Move = function () {

    }

    // A piece Object
    Piece = function () {

    }

    // A Player object. I expect this will be necessary.
    Player = function () {

    }

    Player.prototype.placePlayer1Pieces = function (board) {

    }

    Player.prototype.placePlayer2Pieces = function (board) {
        
    }

    // A list of all the rounds 
    RoundsHistory = function () {

    }

    // A round is a set of moves, and a victor. A round could also be 'In progress' or 'Unfinished'
    Round = function () {

    }

    // The set of moves done for a round 
    MovesHistory = function () {

    }

window.Dames = Dames;
})()