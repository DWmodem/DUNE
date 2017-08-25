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
        for (var i = 0; i < NUM_SQUARES; i++) {
            this.board[i] = [];
            for (var j = 0; j < NUM_SQUARES; j++) {
                this.board[i][j] = EMPTY_SQUARE;
            }
        }
    }

    Dames.prototype.placePlayer1 = function () {
        for (var j = NUM_SQUARES-1 ; j > NUM_SQUARES - NUM_PLAYER_ROWS -1 ; j--) {
            for (var i = (j+1) % 2; i < NUM_SQUARES; i+=2) {
                this.board[j][i] = PLAYER_1_PIECE;
            }
        }
    }

    Dames.prototype.placePlayer2 = function () {
        for (var j = 0; j < NUM_PLAYER_ROWS; j++) {
            for (var i = (j+1) % 2; i < NUM_SQUARES; i+=2) {
                this.board[j][i] = PLAYER_2_PIECE;
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
