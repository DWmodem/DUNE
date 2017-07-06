var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'dames', { preload: preload, create: create, update: update, render: render });

// DamesInterface comes from dames-phaser.js
var dames = new DamesER();

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
