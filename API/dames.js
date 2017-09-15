//Dames
(function () {
    var EMPTY_SQUARE = 0;
    var PLAYER_1_PIECE = 1;
    var PLAYER_2_PIECE = 2;
    var NUM_PLAYER_ROWS = 3;
    var NUM_SQUARES = 8;

    // Constructor for the Dames game.
    // This is where the properties are defined.
    Dames = function () {
        this.board = [];
    }

    Dames.prototype.initBoard = function () {
        for (var x = 0; x < NUM_SQUARES; x++) {
            this.board[x] = [];
            for (var y = 0; y < NUM_SQUARES; y++) {
                this.board[x][y] = EMPTY_SQUARE;
            }
        }
    }

    Dames.prototype.placePlayer1 = function () {
        for (var y = NUM_SQUARES-1 ; y > NUM_SQUARES - NUM_PLAYER_ROWS -1 ; y--) {
            for (var x = (y+1) % 2; x < NUM_SQUARES; x+=2) {
                this.board[x][y] = PLAYER_1_PIECE;
            }
        }
    }

    Dames.prototype.placePlayer2 = function () {
        for (var y = 0; y < NUM_PLAYER_ROWS; y++) {
            for (var x = (y+1) % 2; x < NUM_SQUARES; x+=2) {
                this.board[x][y] = PLAYER_2_PIECE;
            }
        }
    }

    Dames.prototype.setup = function () {
        this.initBoard();
        this.placePlayer1();
        this.placePlayer2();
        console.log(this.board);
    }

    window.Dames = Dames;
})()

