var game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'dames');

// DamesInterface comes from dames-phaser.js
var shapes = new Shapes(game);
var menu   = new Menu(game);
var dames  = new DamesER(game, shapes, menu);

game.state.add("damesTitle", damesTitle);
game.state.add("damesGame", damesGame);
game.state.start("damesTitle");