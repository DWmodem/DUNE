var game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'dames', { preload: preload, create: create, update: update, render: render });

// DamesInterface comes from dames-phaser.js
var shapes = new Shapes(game);
var menu   = new Menu(game);
var dames  = new DamesER(game, shapes, menu);

function preload() {
    dames.preload();
    menu.preload();
}

function create() {
    dames.create();
    menu.create();
}

function update() {
    dames.update();
}

function render () {
    dames.render();
    
}
