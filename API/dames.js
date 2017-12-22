//Dames
(function () {


    // Constructor for the Dames game.
    // This is where the properties are defined.
    Dames = function () {
        this.board = [];
        this.EMPTY_SQUARE = 0;
        this.PLAYER_1_PIECE = 1;
        this.PLAYER_2_PIECE = 2;
        this.NUM_PLAYER_ROWS = 3;
        this.NUM_SQUARES = 8;
    }

    Dames.prototype.initBoard = function () {
        for (var x = 0; x < this.NUM_SQUARES; x++) {
            this.board[x] = [];
            for (var y = 0; y < this.NUM_SQUARES; y++) {
                this.board[x][y] = this.EMPTY_SQUARE;
            }
        }
    }

    Dames.prototype.placePlayer1 = function () {
        for (var y = this.NUM_SQUARES-1 ; y > this.NUM_SQUARES - this.NUM_PLAYER_ROWS -1 ; y--) {
            for (var x = (y+1) % 2; x < this.NUM_SQUARES; x+=2) {
                this.board[x][y] = this.PLAYER_1_PIECE;
            }
        }
    }

    Dames.prototype.placePlayer2 = function () {
        for (var y = 0; y < this.NUM_PLAYER_ROWS; y++) {
            for (var x = (y+1) % 2; x < this.NUM_SQUARES; x+=2) {
                this.board[x][y] = this.PLAYER_2_PIECE;
            }
        }
    }

    Dames.prototype.movePiece = function (player, source, target) {


    }

    Dames.prototype.setup = function () {
        this.initBoard();
        this.placePlayer1();
        this.placePlayer2();
        console.log(this.board);
    }

    window.Dames = Dames;
})()

