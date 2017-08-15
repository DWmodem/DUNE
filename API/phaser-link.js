var game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'dames', { preload: preload, create: create, update: update, render: render });

// DamesInterface comes from dames-phaser.js
var shapes = new Shapes(game);
var dames  = new DamesER(game, shapes);

function preload() {
    dames.preload();
}

function create() {
    dames.create();
}

function update() {
    dames.update();
}

function render () {
    dames.render();
}
