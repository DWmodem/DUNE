var game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'dames');

// DamesInterface comes from dames-phaser.js
var shapes = new Shapes(game);
var menu   = new Menu(game);
var dames  = new DamesER(game, shapes, menu);

var damesTitle = function (game) {
    console.log("Construct title state");
    this.button = {};

}

damesTitle.prototype.preload = function() {
    game.load.image('vlarb', 'art/dames/dune_title.png');
    game.load.image('vlarb_background', 'art/dames/dune_title_background.png');
}

damesTitle.prototype.create = function() {
    
    game.add.tileSprite(0, 0, 1280, 720, 'vlarb_background');
    var playButton = this.game.add.button(160,320, "vlarb", function() {game.state.start("dameState");},this);
}

var dameState = function (game) {
    console.log("Constuct dames state");
}

dameState.prototype.preload = function() {
    dames.preload();
    menu.preload();
}

dameState.prototype.create = function () {
    dames.create();
    menu.create();
}

dameState.prototype.render = function () {
    dames.render();
    menu.render();
}

dameState.prototype.update = function () {
    dames.update();
    menu.update();
}

game.state.add("damesTitle", damesTitle);
game.state.add("dameState", dameState);
game.state.start("damesTitle");